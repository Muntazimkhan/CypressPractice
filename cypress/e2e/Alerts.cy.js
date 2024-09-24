/// <reference types="cypress" />
describe('Handling Alerts', () => {
    beforeEach(() => {
      cy.visit("https://demo.automationtesting.in/Alerts.html");
    });
  
    it("Alert with OK", () => {
      // Set up the listener for the alert
      cy.on('window:alert', (alertText) => {
        // Assert the alert message
        expect(alertText).to.equal('I am an alert box!');
      });
  
      // Trigger the alert
      cy.get(".btn.btn-danger").click();
    });

    it("Alert with OK & Cancel", () => {
      cy.get(".analystic[href='#CancelTab']").click();
  
      cy.on('window:confirm', (confirmText) => {
          expect(confirmText).to.equal('Press a Button !');
          return false; 
      });
  
      cy.get(".btn.btn-primary").click();
  
      // Assertion
      cy.get("#demo").should('have.text', 'You Pressed Cancel');
  });

  it.only('Alert with Textbox', () => {
    cy.get(".analystic[href='#CancelTab']").click();

    // Stub the prompt method to return the desired value
    cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('Automation Testing user'); 
    });

    // Click the button that triggers the prompt
    cy.get(".btn.btn-info").click();

    // Adjust the assertion to match the expected outcome after the prompt
    cy.xpath("//p[@id='demo1']").should('have.text', 'Hello Automation Testing user How are you today');
});

  

  });
  