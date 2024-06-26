import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => { //.skip - travar sua pesquisa.

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButoon: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboarGrid: ".orangehrm-dashboard-grid",
    wrongCredentilAlert: "[role='alert']"
  }

  it('Login - Success', () => { //teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username) //('ADMIN')//usuário/seletores/comando
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)//('admin123') //senha/seletores/comando
    cy.get(selectorsList.loginButoon).click() //botao - entrer
    cy.location('pathname').should('equal',"/web/index.php/dashboard/index")// checar - igual
    cy.get(selectorsList.dashboarGrid) //.contains("Dashboard") // get- checar se existe
  })
  it('Login - Fail', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userfail.username)//('test')//ADMIN
    cy.get(selectorsList.passwordField).type(userData.userfail.password)//('ateste3') //dmin123
    cy.get(selectorsList.loginButoon).click() 
    cy.get(selectorsList.wrongCredentilAlert) //classe - nunca teste o texto
  })
    
})