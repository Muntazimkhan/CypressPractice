
describe('Form Registration', () => {
  it('User Registration with Valid data', () => {
    cy.visit('https://demo.automationtesting.in/Register.html')
    cy.url().should('contain', 'Register.html')

    cy.get("input[placeholder='First Name']").type("Cypress")
    cy.get("input[placeholder='Last Name']").type("Automation")
    cy.get(".col-md-8 > .form-control").type("ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abc")
    cy.get("input[type='email']").type("abc123@gmail.com")
    cy.get("input[type='tel']").type("0987654321")
    cy.get("input[type='tel']").should('have.value', '0987654321');

    //Radio button and Checkbox  
    cy.get("input[value='Male']").click()
    cy.get("#checkbox2").check(); 
    cy.get("#checkbox2").should('be.checked');


    //Dropdowns
    cy.get("#Skills").select("Adobe Photoshop")

    cy.get("span[role='combobox']").click()
    cy.get('.select2-results__option').contains('Denmark').click();
    cy.get("#select2-country-container").should('contain', 'Denmark'); 

    cy.get("#yearbox").select("2001")
    cy.get("select[placeholder='Month']").select("April")
    cy.get("#daybox").select("2")


    cy.xpath('(//input[@type="password"])[1]').type("789987")
    cy.xpath('(//input[@type="password"])[2]').type("789987")

    cy.get("#imagesrc").selectFile('C:/Users/Workbox/Downloads/Navigating the Globalization Impact on Sovereignty_ A Case Study Approach.doc')

    cy.xpath("//button[@id='submitbtn']").click()







  })
})