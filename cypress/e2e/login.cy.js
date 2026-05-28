describe('Login Tests - Automation Exercise', () => {

  it('Should load login page successfully', () => {
    cy.visit('https://automationexercise.com/login', { failOnStatusCode: false })
    cy.contains('Login to your account').should('be.visible')
  })

  it('Should show error with invalid credentials', () => {
    cy.visit('https://automationexercise.com/login', { failOnStatusCode: false })
    cy.get('[data-qa="login-email"]').type('wrong@email.com')
    cy.get('[data-qa="login-password"]').type('wrongpassword')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Your email or password is incorrect!').should('be.visible')
  })

  it('Should navigate to register page', () => {
    cy.visit('https://automationexercise.com/login', { failOnStatusCode: false })
    cy.contains('New User Signup!').should('be.visible')
  })

})