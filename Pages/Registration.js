import { firstName, lastName, email, enterAddress, enterPhonenumber, selectHobby, selectMale, selectSkill, countryDropdown, selectCountry, selectYear, selectMonth, selectDay, enterPassword, confirmPassword, uploadDoc, clickSubmit } from "../pageLocators/registrationLocators";

class UserRegistration {
    visitRegistrationPage() {
        cy.visit('https://demo.automationtesting.in/Register.html');
    }

    fillUserRegistrationForm() {
        cy.get(firstName).type("Cypress");
        cy.get(lastName).type("Automation");
        cy.get(enterAddress).type("ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abc");
        cy.get(email).type("abc123@gmail.com");
        cy.get(enterPhonenumber).type("0987654321");
    }

    selectHobbiesAndGender() {
        cy.get(selectMale).click();
        cy.get(selectHobby).check();
    }

    selectionFromDropdown() {
        cy.get(selectSkill).select("Adobe Photoshop")
        cy.get(countryDropdown).click()
        cy.get(selectCountry).contains('Denmark').click();

    }
    selectDOB() {
        cy.get(selectYear).select("2001")
        cy.get(selectMonth).select("April")
        cy.get(selectDay).select("2")
    }
    passwordConfirmation() {
        cy.xpath(enterPassword).type("789s@3987")
        cy.xpath(confirmPassword).type("789s@3987")
    }
    documentUpload() {
        cy.get(uploadDoc).selectFile('C:/Users/Workbox/Downloads/Navigating the Globalization Impact on Sovereignty_ A Case Study Approach.doc')
    }
    submitForm(){
        cy.xpath(clickSubmit).click()

    }
}

export default UserRegistration