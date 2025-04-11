pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18'  // Make sure this name matches your Jenkins NodeJS tool config
    }

    environment {
        CI = 'true' // Disable watch mode, improves reliability
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/nalintrade/bddsession.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Clean Previous Reports') {
            steps {
                bat '''
                if exist reports rmdir /s /q reports
                if exist allure-results rmdir /s /q allure-results
                if exist allure-report rmdir /s /q allure-report
                '''
            }
        }

        stage('Run BDD Tests') {
            steps {
                catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
                bat 'npx cucumber-js tests/features/GetOnlineQuote.feature --import tests/stepDefinitions/*.mjs --format json:reports/cucumber-report.json --exit'
                }
            }
        }
        
        stage('Convert to Allure Format') {
            when {
                expression { return currentBuild.result == null || currentBuild.result == 'FAILURE' }
            }
            steps {
                bat 'node convertToAllure.js'
            }
        }
        
        stage('Generate Allure Report') {
            steps {
                bat 'npx allure generate allure-results --clean -o allure-report'
            }
        }
        
        stage('Publish Allure Report') {
            steps {
                allure includeProperties: false,
                       jdk: '',
                       reportBuildPolicy: 'ALWAYS',
                       results: [[path: 'allure-results']],
                       commandline: 'Allure_CLI_2_20_1'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'reports/*.json', allowEmptyArchive: true
        }
    }
}
