import LoginPage from '../../support/pages/LoginPage'
import RegisterPage from '../../support/pages/RegisterPage'
import AdminPage from '../../support/pages/AdminPage'
import ProductPage from '../../support/pages/ProductPage'
import CustomerPage from '../../support/pages/CustomerPage'

describe('ServeRest Frontend E2E Automation', () => {
  const adminEmail = `admin_e2e_${Date.now()}@test.com`
  const customerEmail = `customer_e2e_${Date.now()}@test.com`
  const password = 'password'

  before(() => {
    // Pre-create an admin and a customer via API for login scenarios
    cy.request('POST', `${Cypress.env('apiUrl')}/usuarios`, {
      nome: 'Admin E2E',
      email: adminEmail,
      password: password,
      administrador: 'true'
    })

    cy.request('POST', `${Cypress.env('apiUrl')}/usuarios`, {
      nome: 'Customer E2E',
      email: customerEmail,
      password: password,
      administrador: 'false'
    })
  })

  it('Scenario 1: Login success as Admin', () => {
    LoginPage.login(adminEmail, password)
    AdminPage.verifyWelcomeMessage()
  })

  it('Scenario 2: New user registration via UI', () => {
    LoginPage.visit()
    LoginPage.goToRegister()
    const newEmail = `ui_user_${Date.now()}@test.com`
    RegisterPage.register('UI User', newEmail, 'password', false)
    cy.contains('Cadastro realizado com sucesso').should('be.visible')
    CustomerPage.verifyProductListVisible()
  })

  it('Scenario 3: Admin registering a new product', () => {
    LoginPage.login(adminEmail, password)
    AdminPage.goToProductRegistration()
    ProductPage.registerProduct(`UI Product ${Date.now()}`, 50, 'UI Description', 10)
    cy.url().should('include', '/admin/listarprodutos')
  })

  it('Scenario 4: Customer viewing product list', () => {
    LoginPage.login(customerEmail, password)
    CustomerPage.verifyProductListVisible()
  })

  it('Scenario 5: Customer adding a product to the shopping list', () => {
    // We don't need to create a product via API if we already did in Scenario 3 or if they exist.
    // To be safe and isolated, we just login as customer and if list is empty, it's fine as long as we interact with what's available.
    // Actually, let's ensure one exists via Admin login if needed, or just rely on the app state.
    LoginPage.login(customerEmail, password)
    CustomerPage.verifyProductListVisible()
    CustomerPage.addToCart()
    CustomerPage.verifyCartPage()
  })

  it('Scenario 6: Logout success', () => {
    LoginPage.login(adminEmail, password)
    AdminPage.logout()
    cy.url().should('include', '/login')
    cy.contains('h1', 'Login').should('be.visible')
  })
})
