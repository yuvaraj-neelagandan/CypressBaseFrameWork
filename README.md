#Instalation steps

npm install cross-env --save-dev

npm install cypress typescript @cypress/webpack-preprocessor --save-dev

npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator


#Folder Structure

cypress-ts-base-project/
├── cypress/                      # Cypress tests and configurations
│   ├── e2e/                      # End-to-end test specifications
│   │   ├── functionality/        # Functionality test specifications
│   │   │   ├── sample.cy.ts      # Example functionality test spec
│   │   ├── regression/           # Regression test specifications
│   │   │   ├── regression.cy.ts  # Example regression test spec
│   ├── support/                  # Support files for Cypress
│   │   ├── commands.ts           # Custom Cypress commands
│   │   ├── e2e.ts                # Global test setup and configuration
│   ├── fixtures/                 # Test data and configuration
│   │   ├── example.json          # Example test data
│   ├── utils/                    # Utility functions and helpers
│   │   ├── mouseActions.ts       # Mouse action utilities
│   │   ├── pageActions.ts        # Page interaction utilities
│   │   ├── waitHelpers.ts        # Wait helper utilities
├── tsconfig.json                 # TypeScript configuration
├── cypress.config.ts             # Cypress configuration file
├── package.json                  # Project dependencies and scripts
├── README.md                     # Project documentation (this file)



#Run Test

npm run cy:run
npm run test:regression
npm run test:functionality
npm run test:both


#Generate Report
npm run generate-report

