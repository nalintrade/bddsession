// convertToAllure.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inputFile = path.resolve(__dirname, 'reports/cucumber-report.json');
const outputDir = path.resolve(__dirname, 'allure-results');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const report = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

report.forEach((feature, featureIndex) => {
  feature.elements.forEach((scenario, scenarioIndex) => {
    const name = `${feature.name} - ${scenario.name}`;
    const status = scenario.steps.every((step) => step.result.status === 'passed')
    ? 'passed'
    : scenario.steps.some((step) => step.result.status === 'undefined')
      ? 'broken'
      : scenario.steps.some((step) => step.result.status === 'pending')
        ? 'skipped'
        : 'failed';

    const uid = crypto.randomUUID();
    const result = {
      uuid: uid,
      name,
      status,
      stage: 'finished',
      steps: scenario.steps.map((step) => ({
        name: step.name,
        status: step.result.status,
        stage: 'finished',
      })),
      labels: [
        { name: 'feature', value: feature.name },
        { name: 'suite', value: feature.name },
      ],
    };

    fs.writeFileSync(
      path.join(outputDir, `${uid}-result.json`),
      JSON.stringify(result, null, 2),
      'utf-8'
    );
  });
});
