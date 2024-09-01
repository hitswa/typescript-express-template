// E2E testing using playwright

import { test, expect } from '@playwright/test';

test('should create and fetch a user', async ({ page }) => {
    await page.goto('/users'); // Your app URL

    await page.click('[data-cy=create-user]');
    await page.fill('[data-cy=user-name]', 'John Doe');
    await page.fill('[data-cy=user-email]', 'john@example.com');
    await page.click('[data-cy=submit]');

    await expect(page.locator('[data-cy=user-list]')).toContainText('John Doe');
});
