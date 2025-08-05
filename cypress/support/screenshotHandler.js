afterEach(function () {
  const testName = this.currentTest.fullTitle().replace(/ /g, '_');

  if (this.currentTest.state === 'passed') {
    cy.screenshot(`success/${testName}`);
  }

  if (this.currentTest.state === 'failed') {
    cy.screenshot(`falhou/${testName}`);
  }
});
