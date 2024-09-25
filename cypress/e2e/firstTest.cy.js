/// <reference types="cypress" />
import UserRegistration from "../../Pages/Registration"

describe('Form Registration', () => {
  it('User Registration with Valid data', () => {
    const registration = new UserRegistration()

    //Visit URL
    registration.visitRegistrationPage()

    //Fill Basic Information
    cy.url().should('contain', 'Register.html')
    registration.fillUserRegistrationForm()
    cy.get("input[type='tel']").should('have.value', '0987654321');

    //Radio button and Checkbox  
    registration.selectHobbiesAndGender()
    cy.get("#checkbox2").should('be.checked');

    //Dropdowns
    registration.selectionFromDropdown()
    cy.get("#select2-country-container").should('contain', 'Denmark'); 

    //DOB Dropdown
    registration.selectDOB()

    //Password
    registration.passwordConfirmation()

    //Upload File
    registration.documentUpload()
    registration.submitForm()
  })
})