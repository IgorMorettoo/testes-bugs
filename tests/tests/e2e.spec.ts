import { test, expect } from '@playwright/test';

test('should create account and redirect to feed', async ({ page }) => {
  await page.goto('http://localhost:3000/signup');

  const inputs = page.getByRole('textbox');

  await inputs.nth(0).fill(`teste${Date.now()}@gmail.com`);
  await inputs.nth(1).fill('Admin123@');
  await inputs.nth(2).fill('Admin123@');

  await page
    .getByRole('main')
    .getByRole('button', { name: 'Criar Conta' })
    .click();

  await expect(page.getByText('Feed de Posts')).toBeVisible();
});

test('should like a post when authenticated', async ({ page }) => {
  await page.goto('http://localhost:3000/signup');

  const inputs = page.getByRole('textbox');

  await inputs.nth(0).fill(`teste${Date.now()}@gmail.com`);
  await inputs.nth(1).fill('Admin123@');
  await inputs.nth(2).fill('Admin123@');

  await page
    .getByRole('main')
    .getByRole('button', { name: 'Criar Conta' })
    .click();

  await expect(page.getByText('Feed de Posts')).toBeVisible();

  await page
    .getByRole('button', { name: /Curtir/i })
    .first()
    .click();

  await expect(
    page.getByRole('button', { name: /Curtido/i }).first()
  ).toBeVisible();
});