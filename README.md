# QA Automation Framework

End-to-end test automation framework built with Cypress, covering real-world e-commerce scenarios on automationexercise.com.

---

## Test Suites

| Suite | File | Tests |
|-------|------|-------|
| Authentication | login.cy.js | 3 |
| Homepage & Navigation | homepage.cy.js | 10 |
| Product Search & Filtering | search.cy.js | 8 |
| Total | | 21 passing |

---

## Tech Stack

- Cypress 15.16.0
- JavaScript ES6
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

## Run Tests

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
├── cypress.config.js
├── package.json
└── README.md
```

---

## Author

Mohamed Aziz Aouadhi  
QA Automation Engineer  
LinkedIn: https://linkedin.com/in/aziz-aouadhi-b951811b7
