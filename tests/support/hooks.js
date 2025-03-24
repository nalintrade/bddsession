import { AfterAll, Before } from '@cucumber/cucumber';
import world from './world.js';

Before(async () => {
    await world.setup();
  
  // Inject user data directly into localStorage
  await world.page.addInitScript(() => {
    window.localStorage.setItem("users", JSON.stringify([
      { username: "testuser", password: "password123" }
    ]));
  });

  await world.page.reload();
});

AfterAll(async () => {
  await world.teardown();

  // ✅ Don't force process.exit — let Cucumber exit cleanly
});
