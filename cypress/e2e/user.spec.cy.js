import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {

    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNaneField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    gerericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    genericCombobox: ".oxd-select-text--arrow",
    dateCloseButton: ".--close",
    secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
    submitButton: "[type='submit']"
  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNaneField).clear().type('FirstNameTest')
    cy.get(selectorsList.middleNameField).clear().type('MiddleNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.gerericField).eq(3).clear().type('EmployeeT')
    cy.get(selectorsList.gerericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.gerericField).eq(5).clear().type('DriverLicenseTest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2026-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    //cy.get(selectorsList.gerericField).eq(8).clear().type('ssnNumberTest') // Campo retirado do formulário
    //cy.get(selectorsList.gerericField).eq(9).clear().type('sinNumberTest') // Campo retirado do formulário
    cy.get(selectorsList.genericCombobox).eq(0).click({ force: true })
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click({ force: true })
    cy.get(selectorsList.thirdItemCombobox).click()
    cy.get(selectorsList.dateField).eq(1).clear().type('1977-12-28')
    cy.get(selectorsList.dateCloseButton).click()
    //cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click() // Campo bloqueado para edição
    //cy.get('.oxd-form-actions > .oxd-text').clear().type('Qualifications Tests') // Campo bloqueado para edição
    cy.get(selectorsList.submitButton).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })
  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})