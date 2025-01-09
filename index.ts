const cypress = require('cypress');
const { exec } = require('child_process');
const path = require('path');

console.log('Starting Cypress Tests');

// Trigger Cypress tests programmatically
cypress.run({
  spec: 'cypress/e2e/sample_test.cy.ts', // Path to the test spec file
}).then((result) => {
  console.log('Cypress Tests Finished');
  console.log(result);

  // After tests finish, generate the Mochawesome report
  const reportDir = path.join(__dirname, 'cypress/reports');
  const jsonReport = path.join(reportDir, '*.json');
  
  // Merge the reports and generate HTML
  exec(`mochawesome-merge ${jsonReport} > ${reportDir}/report.json`, (err, stdout, stderr) => {
    if (err) {
      console.error('Error merging reports:', err);
      return;
    }
    console.log('Reports merged successfully');
    
    // Generate the HTML report
    exec(`mochawesome-report-generator ${reportDir}/report.json`, (err, stdout, stderr) => {
      if (err) {
        console.error('Error generating report:', err);
        return;
      }
      console.log('HTML report generated successfully');
    });
  });
}).catch((error) => {
  console.error('Cypress Tests Failed');
  console.error(error);
});
