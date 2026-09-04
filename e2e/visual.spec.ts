import { test } from "@playwright/test";

test("Capture full visual screenshots of UI Consultancy website", async ({ page }) => {
  // Set viewport
  await page.setViewportSize({ width: 1280, height: 800 });

  // 1. Home page
  await page.goto("http://localhost:3000/");
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "public/screenshots/home.png", fullPage: true });

  // 2. Programs Directory
  await page.goto("http://localhost:3000/programs");
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "public/screenshots/programs.png", fullPage: true });

  // 3. Admissions Application Portal
  await page.goto("http://localhost:3000/apply");
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "public/screenshots/apply.png", fullPage: true });

  // 4. Verification Portal
  await page.goto("http://localhost:3000/verify");
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "public/screenshots/verify.png", fullPage: true });

  // 5. Student E-Portal
  await page.goto("http://localhost:3000/portal");
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "public/screenshots/portal.png", fullPage: true });
});
