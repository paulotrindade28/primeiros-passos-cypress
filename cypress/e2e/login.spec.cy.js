describe('Orange HRM Tests', () => { //.skip - travar sua pesquisa.
  it('Login - Success', () => { //teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('ADMIN')//usuário/seletores/comando
    cy.get("[name='password']").type('admin123') //senha/seletores/comando
    cy.get("[type='submit']").click() //botao - entrer
    cy.location('pathname').should('equal',"/web/index.php/dashboard/index")// checar - igual
    cy.get('.oxd-topbar-header-breadcrumb-module').contains("Dashboard") // get- checar se existe
  })
  it('Login - Fail', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('test')//ADMIN
    cy.get("[name='password']").type('ateste3') //dmin123
    cy.get("[type='submit']").click() 
    cy.get("[role='alert']") //classe - nunca teste o texto
  })
    
})