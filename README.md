# acplaywright

# Adventurer's Codex Automation Testing

### Welcome to Adventurer’s Codex Automation

Enhancing your experience with automated testing!

## What is this Project?

This project provides an automated testing suite for the [Adventurer’s Codex](https://adventurerscodex.com) website using [Playwright](https://playwright.dev). By automating tests, we can ensure that the application remains functional and is continuously improved, enhancing the table-top RPG experience for players and DMs.

## Why Use Playwright?

Playwright is a powerful tool that enables reliable and efficient end-to-end testing. It supports multiple browsers and provides a simple API for writing tests in JavaScript, TypeScript, and various other languages. This allows us to verify that the functionalities of Adventurer’s Codex work as intended.

## Getting Started

To get started with running the tests, follow these steps:

### 1. Prerequisites

Make sure you have the following installed:

- Node.js (version 12 or higher)
- NPM or Yarn

### 2. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/hotchetos07/acplaywright.git
cd acplaywright
```

### 3. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 4. Running Tests

You can run the tests using the following command:

```bash
npx playwright test
```

This command will execute all tests written in the `tests` directory and provide you with a summary of the results in the console.

### 5. Running Tests in a Specific Browser

By default, Playwright tests run in all available browsers. You can specify a single browser to run tests in:

```bash
npx playwright test --project=chromium  # for Chrome
npx playwright test --project=firefox    # for Firefox
npx playwright test --project=webkit     # for Safari
```

## Writing Tests

Tests are located in the `tests` directory. Here’s a brief overview of how to add a new test:

1. Create a new `.spec.ts` file in the `tests` directory.
2. Use Playwright's API to write tests that interact with the Adventurer’s Codex interface.

Example Test:

```typescript
import { test, expect } from "@playwright/test";

test("homepage has title and links to the character page", async ({ page }) => {
  await page.goto("https://adventurerscodex.com");
  await expect(page).toHaveTitle(/Adventurer's Codex/);
  await expect(page.locator("text=Characters")).toBeVisible();
});
```

## Need Help?

If you have questions or need assistance, feel free to reach out via myspace or create an issue in this repository. We welcome contributions and discussions about improvements!

## How to Contribute

Feel free to modify any parts according to your specific project details, such as the repository link, contributing guidelines, and issue tracking.
