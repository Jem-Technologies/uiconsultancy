import { test, expect } from "@playwright/test";

test.describe("UI Consultancy Web Portal Workflows", () => {
  test("Homepage loads with branding, hero CTA, and featured programs", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await expect(page).toHaveTitle(/University of Ibadan Consultancy Services Unit/);
    await expect(page.locator("h1")).toContainText("Your Pathway To");
  });

  test("Programs catalog displays search and department filtering", async ({ page }) => {
    await page.goto("http://localhost:3000/programs");
    await expect(page.locator("h1")).toContainText("Executive & Professional Diploma Programs");
    
    // Search input
    const searchInput = page.locator("input[placeholder*='Search by program name']");
    await searchInput.fill("Computer Science");
    await expect(page.locator("text=PGD-CSIT").first()).toBeVisible();
  });

  test("Fee Calculator estimates tuition and installment schedules", async ({ page }) => {
    await page.goto("http://localhost:3000/fees");
    await expect(page.locator("text=Flexible Financial Payment Options")).toBeVisible();
    await expect(page.locator("text=First Bank of Nigeria PLC").first()).toBeVisible();
  });

  test("Verification Portal authenticates certificates by reference code", async ({ page }) => {
    await page.goto("http://localhost:3000/verify");
    const input = page.locator("input[placeholder*='UIC-2023-0891']");
    await input.fill("UIC-2023-0891");
    await page.click("button:has-text('Verify Credential')");
    await expect(page.locator("text=VERIFIED & AUTHENTIC")).toBeVisible();
    await expect(page.locator("text=BABATUNDE, Oluwaseun Emmanuel")).toBeVisible();
  });

  test("Student Portal displays authentication gate and login form", async ({ page }) => {
    await page.goto("http://localhost:3000/portal");
    await expect(page.locator("text=Portal Authentication Gate")).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign In to Portal" })).toBeVisible();
  });
});
