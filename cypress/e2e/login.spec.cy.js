describe('Orange HRM Tests', () => { //.skip - travar sua pesquisa.

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButoon: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentilAlert: "[role='alert']"

  }

  it('Login - Success', () => { //teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('ADMIN')//usuário/seletores/comando
    cy.get(selectorsList.passwordField).type('admin123') //senha/seletores/comando
    cy.get(selectorsList.loginButoon).click() //botao - entrer
    cy.location('pathname').should('equal',"/web/index.php/dashboard/index")// checar - igual
    cy.get(selectorsList.sectionTitleTopBar).contains("Dashboard") // get- checar se existe
  })
  it('Login - Fail', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('test')//ADMIN
    cy.get(selectorsList.passwordField).type('ateste3') //dmin123
    cy.get(selectorsList.loginButoon).click() 
    cy.get(selectorsList.wrongCredentilAlert) //classe - nunca teste o texto
  })
    
})