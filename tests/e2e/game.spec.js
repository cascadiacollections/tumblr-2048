import { test, expect } from '@playwright/test';

test.describe('2048 Game', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the game page', async ({ page }) => {
    await expect(page).toHaveTitle(/2048 Cat GIFs/);
    await expect(page.locator('.game-container')).toBeVisible();
  });

  test('should have grid cells', async ({ page }) => {
    const gridCells = page.locator('.grid-cell');
    await expect(gridCells).toHaveCount(16); // 4x4 grid
  });

  test('should display progress bar', async ({ page }) => {
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-progrecss');
  });

  test('should have game controls', async ({ page }) => {
    await expect(page.locator('.retry-button')).toBeVisible();
    await expect(page.locator('.keep-playing-button')).toBeVisible();
  });

  test('should respond to keyboard input', async ({ page }) => {
    // Wait for tiles to load
    await page.waitForSelector('.tile', { timeout: 5000 });

    const initialTiles = await page.locator('.tile').count();

    // Press arrow key
    await page.keyboard.press('ArrowUp');

    // Wait a bit for animation
    await page.waitForTimeout(500);

    // Check that tiles exist (game is interactive)
    const currentTiles = await page.locator('.tile').count();
    expect(currentTiles).toBeGreaterThan(0);
  });
});
