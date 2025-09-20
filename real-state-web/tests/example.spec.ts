import { test, expect } from "@playwright/test";

test("should open the list of real states", async ({ page }) => {
  await page.goto("http://localhost:3000/");

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
  await page.getByLabel("Name").fill("Barranquilla");
  await expect(page.getByText("8066 Quintas de Barranquilla")).toBeVisible();
});
test("should query by address", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByLabel("Address").fill("Cartagena");
  await expect(page.getByText("2756 Reservas de Cartagena")).toBeVisible();
});
test("should query by price range", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByLabel("Min value for range").fill("20000000");
  await page.getByLabel("Max value for range").fill("40000000");
  await expect(page.getByText("4280 Quintas de Santa Maria")).toBeVisible();
});
test("should navigate to next page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("button", { name: "Next", exact: true }).click();
  await expect(page.getByText("1532 Villas de Santa Maria")).toBeVisible();
});
test("should navigate to prev page", async ({ page }) => {
  await page.goto("http://localhost:3000/?pageNumber=4");
  await page.getByRole("button", { name: "Previous" }).click();
  await expect(page.getByText("3209 Quintas de Portofino")).toBeVisible();
});
test("should disable next page", async ({ page }) => {
  await page.goto("http://localhost:3000/?pageNumber=100");
  await expect(
    page.getByRole("button", { name: "Next", exact: true }),
  ).toBeDisabled();
});
test("should disable prev page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByRole("button", { name: "Previous" })).toBeDisabled();
});

test("should open a real state detail", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByText("1372 Miami Avenue").click();

  await expect(page.getByText("Mohandis Dyte")).toBeVisible();
});

test("should sort by name", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByLabel("Sort by").selectOption("Name");
  await expect(page.getByText("1010 Villas de Montreal")).toBeVisible();
  await page.getByRole("button", { name: "Toggle direction" }).click();
  await expect(page.getByText("9978 Villas de Barranquilla")).toBeVisible();
});

test("should sort by address", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByLabel("Sort by").selectOption("Address");
  await expect(page.getByText("1010 Villas de Montreal")).toBeVisible();
  await page.getByRole("button", { name: "Toggle direction" }).click();
  await expect(page.getByText("9978 Villas de Barranquilla")).toBeVisible();
});

test("should sort by price", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByLabel("Sort by").selectOption("Price");
  await expect(page.getByText("6448 Santa Marta Real")).toBeVisible();
  await page.getByRole("button", { name: "Toggle direction" }).click();
  await expect(page.getByText("3491 Reservas de Santa Maria")).toBeVisible();
});

test("should show empty list when no results", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByLabel("Name").fill("No existe");
  await expect(page.getByRole("button", { name: "Previous" })).toBeDisabled();
  await expect(
    page.getByRole("button", { name: "Next", exact: true }),
  ).toBeDisabled();
  await expect(page.getByText("There is no real states")).toBeVisible();
});
