class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNaneField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            gerericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            genderRadio: ".oxd-radio-wrapper",
            dateCloseButton: ".--close",
            secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
            thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
            submitButton: "[type='submit']",
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName, birthDate) {
        cy.get(this.selectorsList().firstNaneField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().gerericField).eq(7).clear().type(birthDate)
    }

    fillEmployeeDetails(employeeId, otherId) {
        cy.get(this.selectorsList().gerericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().gerericField).eq(4).clear().type(otherId)
    }

    fillDriverLicenseDetails(driversLicenseNumber, licenseExpiryDate) {
        cy.get(this.selectorsList().gerericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseExpiryDate)
    }

    fillStatus() {
        //cy.get(this.selectorsList().genderRadio).eq(1).click({ force: true })
        // cy.get(this.selectorsList().secondItemCombobox).click()
        // cy.get(this.selectorsList().genericCombobox).eq(1).click({ force: true })
        // cy.get(this.selectorsList().thirdItemCombobox).click()
    }


        //cy.get(this.selectorsList().dateCloseButton).click()
        //cy.get(this.selectorsList().gerericField).eq(8).clear().type('ssnNumberTest') // Campo retirado do formulário
        //cy.get(this.selectorsList().gerericField).eq(9).clear().type('sinNumberTest') // Campo retirado do formulário
    

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage