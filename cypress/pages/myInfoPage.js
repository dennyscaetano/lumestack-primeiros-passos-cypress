class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNaneField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            gerericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            secondGenderRadio: ":nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input", // Pequeno desafio, alterando radio para "Female"
            dateCloseButton: ".--close",
            gerericComboboxList: ".oxd-select-text--arrow", // Pequeno desafio, combobox genérico
            twentySeventhItemComboboxList: ":nth-child(27) > span", // Pequeno desafio, escolhendo 27º item da lista combobox "Brazilian"
            thirdItemComboboxList: ":nth-child(3) > span", // Pequeno desafio, escolhendo 3º item da lista combobox "Married"
            submitButton: "[type='submit']",
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName, birthDate) {
        cy.get(this.selectorsList().firstNaneField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().dateField).eq(1).clear().type(birthDate)
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
        cy.get(this.selectorsList().secondGenderRadio).click({ force: true })  // Pequeno desafio, alterando radio para "Female"
        cy.get(this.selectorsList().gerericComboboxList).eq(0).click({ force: true }) // Pequeno desafio, abrindo o combobox de "Nationality"
        cy.get(this.selectorsList().twentySeventhItemComboboxList).click({ force: true }) // Pequeno desafio, escolhendo o 27º item da lista combobox "Brazilian" 
        cy.get(this.selectorsList().gerericComboboxList).eq(1).click({ force: true }) // Pequeno desafio, abrindo o combobox de "Marital Status"
        cy.get(this.selectorsList().thirdItemComboboxList).click({ force: true }) // Pequeno desafio, escolhendo o 3º item da lista combobox "Married" 
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage