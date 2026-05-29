# QA Automation Framework

End-to-end test automation framework built with Cypress and Playwright, covering real-world e-commerce scenarios on automationexercise.com.

---

## Test Suites

### Cypress (JavaScript)

| Suite | File | Tests |
|-------|------|-------|
| Authentication | cypress/e2e/login.cy.js | 3 |
| Homepage & Navigation | cypress/e2e/homepage.cy.js | 10 |
| Product Search & Filtering | cypress/e2e/search.cy.js | 8 |
| Total | | 21 passing |

### Playwright (TypeScript)

| Suite | File | Tests |
|-------|------|-------|
| Authentication | playwright/login.spec.ts | 4 |
| Homepage & Navigation | playwright/homepage.spec.ts | 8 |
| Product Search & Filtering | playwright/search.spec.ts | 8 |
| Example | playwright/example.spec.ts | 2 |
| Total | | 22 passing |

---

## Tech Stack

- Cypress 15.16.0
- Playwright 1.17
- JavaScript ES6 / TypeScript
- Node.js
- Git

---

## Prerequisites

- Node.js >= 18.x
- npm >= 9.x

---

## Installation

```bash
git clone https://github.com/mohamedazizaouadhi/qa-automation-framework.git
cd qa-automation-framework
npm install
```

---

## Run Cypress Tests

Open interactive mode:
```bash
npx cypress open
```

Run all tests headless:
```bash
npx cypress run
```

Run a specific file:
```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

---

## Run Playwright Tests

Run all tests on Chromium:
```bash
npx playwright test --project=chromium
```

Run in UI mode:
```bash
npx playwright test --ui
```

Run a specific file:
```bash
npx playwright test playwright/login.spec.ts
```

Show HTML report:
```bash
npx playwright show-report
```

---

## Project Structure

```
qa-automation-framework/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── homepage.cy.js
│   │   └── search.cy.js
│   ├── fixtures/
│   └── support/
├── playwright/
│   ├── login.spec.ts
│   ├── homepage.spec.ts
│   ├── search.spec.ts
│   └── example.spec.ts
├── cypress.config.js
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Author

Mohamed Aziz Aouadhi
QA Automation Engineer
LinkedIn: https://linkedin.com/in/aziz-aouadhi-b951811b7
