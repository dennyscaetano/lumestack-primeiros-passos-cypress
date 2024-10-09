import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage() // Acessando a página inicial de login
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.name(), chance.last(), '1979-09-29')
    myInfoPage.fillEmployeeDetails('EmployId', 'OtherId')
    myInfoPage.fillDriverLicenseDetails('AnyNumber123', '2029-09-19')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })
})