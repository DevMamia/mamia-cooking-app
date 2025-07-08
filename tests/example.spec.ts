import { test, expect } from '@playwright/test';

test('MAMIA app loads successfully', async ({ page }) => {
  await page.goto('/');
  
  // Check that the main heading is visible
  await expect(page.getByRole('heading', { name: 'MAMIA Cooking App' })).toBeVisible();
  
  // Check that the welcome message is present (fix the text to match actual content)
  await expect(page.getByText('Welcome to your home for delicious recipes and meal inspiration!')).toBeVisible();
});

test('Navigation works correctly', async ({ page }) => {
  await page.goto('/');
  
  // Wait for the page to fully load
  await page.waitForLoadState('networkidle');
  
  // Test navigation to Recipes page
  await page.getByRole('link', { name: 'Recipes' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: 'Recipes' })).toBeVisible({ timeout: 10000 });
  
  // Test navigation to Profile page
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: 'Profile' })).toBeVisible({ timeout: 10000 });
  
  // Test navigation back to Home
  await page.getByRole('link', { name: 'Home' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: 'MAMIA Cooking App' })).toBeVisible({ timeout: 10000 });
});

test('Navigation links are clickable and accessible', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  
  // Check that all navigation links are visible and clickable
  const homeLink = page.getByRole('link', { name: 'Home' });
  const recipesLink = page.getByRole('link', { name: 'Recipes' });
  const profileLink = page.getByRole('link', { name: 'Profile' });
  
  await expect(homeLink).toBeVisible();
  await expect(recipesLink).toBeVisible();
  await expect(profileLink).toBeVisible();
  
  // Check that links have proper href attributes
  await expect(homeLink).toHaveAttribute('href', '/');
  await expect(recipesLink).toHaveAttribute('href', '/recipes');
  await expect(profileLink).toHaveAttribute('href', '/profile');
}); 