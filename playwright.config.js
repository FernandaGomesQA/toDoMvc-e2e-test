// @ts-check
const { devices, expect } = require('@playwright/test')
const { matchers } = require('expect-playwright')

// sleep
global.sleep = time => {
  return new Promise(resolve => setTimeout(resolve, time * 1000))
}

// Extend advanced matchers
expect.extend(matchers)
global.expect = expect

// Get env vars
const TARGET = process.env.TARGET || 'hml'
global.TARGET = TARGET

const CONFIG_ENV = require(`./src/config/environment/${TARGET}.json`)
global.CONFIG_ENV = CONFIG_ENV

const CI = process.env.CI || false
global.CI = CI

/** @type {any} */
let reporters = [
  ['html', { outputFolder: 'reports/html', open: CI ? 'never' : 'on-failure' }],
  ['json', { outputFile: 'reports/json/results.json' }],
  ['list']
]
CI && reporters.push(['allure-playwright'], ['github'])

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    baseURL: CONFIG_ENV.baseUrl,
    screenshot: 'only-on-failure',
    trace: CI ? 'on-first-retry' : 'retain-on-failure',
    video: 'on-first-retry',
    ignoreHTTPSErrors: true,
    colorScheme: 'dark',
    actionTimeout: 60 * 1000
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],
  reporter: reporters,
  workers: CI ? 8 : undefined,
  globalTimeout: 60 * 60 * 1000,
  timeout: 60 * 1000,
  outputDir: './reports',
  retries: CI ? 1 : 0,
  forbidOnly: !!CI,
  expect: {
    timeout: 60 * 1000
  }
}

module.exports = config
