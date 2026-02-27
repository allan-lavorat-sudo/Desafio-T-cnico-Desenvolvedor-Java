class RegisterPage {
  fillName(name) {
    cy.get('[data-testid="nome"]').type(name)
  }

  fillEmail(email) {
    cy.get('[data-testid="email"]').type(email)
  }

  fillPassword(password) {
    cy.get('[data-testid="password"]').type(password)
  }

  setAdmin(isAdmin) {
    if (isAdmin) {
      cy.get('[data-testid="checkbox"]').check()
    } else {
      cy.get('[data-testid="checkbox"]').uncheck()
    }
  }

  submit() {
    cy.get('[data-testid="cadastrar"]').click()
  }

  register(name, email, password, isAdmin = false) {
    this.fillName(name)
    this.fillEmail(email)
    this.fillPassword(password)
    this.setAdmin(isAdmin)
    this.submit()
  }
}

export default new RegisterPage()
