import { test, expect } from '@playwright/test';

test('MAMIA app loads successfully', async ({ page }) => {
  await page.goto('/mamas');
  
  // Check that the main heading is visible in the header
  await expect(page.getByRole('heading', { name: 'MAMIA', exact: true })).toBeVisible();
  
  // Check that we get redirected to mamas page and the page title is visible
  await expect(page.getByRole('heading', { name: 'The Mamas' })).toBeVisible();
  
  // Check that the welcome message is present
  await expect(page.getByText('Authentic Recipes from Traditional Cooks')).toBeVisible();
});

test('Navigation works correctly', async ({ page }) => {
  await page.goto('/mamas');
  
  // Wait for the page to fully load
  await page.waitForLoadState('networkidle');
  
  // Test navigation to Recipes page
  const recipesLink = page.getByRole('link', { name: 'Recipes' }).first();
  await recipesLink.evaluate((el: HTMLElement) => el.click());
  await page.waitForURL('**/recipes');
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: 'Discover Recipes' })).toBeVisible({ timeout: 10000 });
  
  // Test navigation to Cook page
  const cookLink = page.getByRole('link', { name: 'Cook' }).first();
  await cookLink.evaluate((el: HTMLElement) => el.click());
  await page.waitForURL('**/cook');
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: 'Start Cooking' })).toBeVisible({ timeout: 10000 });
  
  // Test navigation to My Kitchen page
  const kitchenLink = page.getByRole('link', { name: 'My Kitchen' }).first();
  await kitchenLink.evaluate((el: HTMLElement) => el.click());
  await page.waitForURL('**/kitchen');
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: 'My Kitchen' })).toBeVisible({ timeout: 10000 });
  
  // Test navigation back to Mamas
  const mamasLink = page.getByRole('link', { name: 'Mamas' }).first();
  await mamasLink.evaluate((el: HTMLElement) => el.click());
  await page.waitForURL('**/mamas');
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: 'The Mamas' })).toBeVisible({ timeout: 10000 });
});

test('Navigation links are clickable and accessible', async ({ page }) => {
  await page.goto('/mamas');
  await page.waitForLoadState('networkidle');
  
  // Check that all navigation links are visible and clickable in bottom navigation
  const mamasLink = page.getByRole('link', { name: 'Mamas' });
  const recipesLink = page.getByRole('link', { name: 'Recipes' });
  const cookLink = page.getByRole('link', { name: 'Cook' });
  const kitchenLink = page.getByRole('link', { name: 'My Kitchen' });
  
  await expect(mamasLink).toBeVisible();
  await expect(recipesLink).toBeVisible();
  await expect(cookLink).toBeVisible();
  await expect(kitchenLink).toBeVisible();
  
  // Check that links have proper href attributes
  await expect(mamasLink).toHaveAttribute('href', /\/$/);
  await expect(recipesLink).toHaveAttribute('href', /\/recipes$/);
  await expect(cookLink).toHaveAttribute('href', /\/cook$/);
  await expect(kitchenLink).toHaveAttribute('href', /\/kitchen$/);
});

test('Mama carousel functionality', async ({ page }) => {
  await page.goto('/mamas');
  await page.waitForLoadState('networkidle');
  
  // Check that mama carousel is visible by unique heading elements
  await expect(page.getByRole('heading', { name: 'Nonna Lucia' }).first()).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Abuela Rosa' }).first()).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Mae Malai' }).first()).toBeVisible();
  
  // Test progress dots are visible
  const progressDots = page.locator('button[aria-label*="Go to slide"]');
  await expect(progressDots).toHaveCount(3);
  
  // Test mama card navigation
  await page.getByRole('button', { name: "Open Nonna Lucia’s Cookbook" }).first().evaluate((el:HTMLElement)=>el.click());
  await page.waitForURL('**/cookbook');
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: 'Nonna Lucia\'s Cookbook' })).toBeVisible({ timeout: 10000 });
}); 