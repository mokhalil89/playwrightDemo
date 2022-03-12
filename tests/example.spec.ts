import { test, expect } from '@playwright/test'

test('simple basic test', async ({ page }) => {
  await page.goto('https://www.checklyhq.com/')
  const pageTitle = await page.locator('h1')
  await expect(pageTitle).toContainText(
    'Delightful Active Monitoringfor Developers'
  )
  await page.click(
    "div[class='optanon-alert-box-button optanon-button-allow'] div[class='optanon-alert-box-button-middle']"
  )
  await page.click('#login-button')
})

test('Click on Elements', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/')
  await page.click('#signin_button')
  await page.click('text=sign in')
  const errorMessage = await page.locator('.alert-error')
  await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

test.skip('Selectors ', async ({ page }) => {
  //text
  await page.click('text=some text')

  //css selectors
  await page.click('button')
  await page.click('#id')
  await page.click('.class')

  //only visible css selectors
  await page.click('.submit-button:visible')

  //combinations
  await page.click('#username .first')

  //xpath
  await page.click('//button')
})

test('Working with Inputs', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/index.html')
  await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
  await page.click('#signin_button')
  await page.type('#user_login', 'some username')
  await page.type('#user_password', 'some password')
  await page.click('text=sign in')
  const errorMessage = await page.locator('.alert-error')
  await expect(errorMessage).toContainText('Login and/or password are wrong.')
})
