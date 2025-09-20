import { test, expect } from "@playwright/test";

test("should open the list of real states", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Real States/);

  await expect(page.getByText("1372 Miami Avenue")).toBeVisible();
  await expect(page.getByText("5301 Paris Gardens")).toBeVisible();
  await expect(page.getByText("7450 Quintas de Montreal")).toBeVisible();
  await expect(page.getByText("4431 Parque Barranquilla")).toBeVisible();
  await expect(page.getByText("5772 Parque Cartagena")).toBeVisible();
  await expect(page.getByText("3204 Manhattan Collection")).toBeVisible();
  await expect(page.getByText("8477 Los Angeles Beach")).toBeVisible();
  await expect(page.getByText("8160 Miami Towers")).toBeVisible();
  await expect(page.getByText("8588 Quintas de Cartagena")).toBeVisible();
  await expect(page.getByText("5115 Los Angeles State")).toBeVisible();
});

test("should query by name", async ({ page }) => {
  await page.goto("http://localhost:3000/");
});
test("should query by address", async ({ page }) => {
  await page.goto("http://localhost:3000/");
});
test("should query by price range", async ({ page }) => {
  await page.goto("http://localhost:3000/");
});
test("should navigate to next page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
});
test("should navigate to prev page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
});
test("should disable next page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
});
test("should disable prev page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test("should open a real state detail", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByText("1372 Miami Avenue").click();

  await expect(page.getByText("Mohandis Dyte")).toBeVisible();
});
