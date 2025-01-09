#Instalation steps

npm install cross-env --save-dev

npm install cypress typescript @cypress/webpack-preprocessor --save-dev

npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator


#Folder Structure

cypress-ts-base-project/
├── cypress/
│   ├── e2e/
│   │   ├── sample.cy.ts
│   ├── support/
│   │   ├── commands.ts
│   │   ├── e2e.ts
│   ├── fixtures/
│   │   ├── example.json
│   ├── utils/
│   │   ├── mouseActions.ts
│   │   ├── pageActions.ts
│   │   ├── waitHelpers.ts
├── tsconfig.json
├── cypress.config.ts
├── package.json
├── README.md


#Run Test

npm run cy:run
npm run test:regression
npm run test:functionality
npm run test:both


#Generate Report
npm run generate-report

