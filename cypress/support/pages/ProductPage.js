class ProductPage {
  fillName(name) {
    cy.get('[data-testid="nome"]').type(name)
  }

  fillPrice(price) {
    cy.get('[data-testid="preco"]').type(price)
  }

  fillDescription(description) {
    cy.get('[data-testid="descricao"]').type(description)
  }

  fillQuantity(quantity) {
    cy.get('[data-testid="quantity"]').type(quantity)
  }

  submit() {
    cy.get('[data-testid="cadastarProdutos"]').click()
  }

  registerProduct(name, price, description, quantity) {
    this.fillName(name)
    this.fillPrice(price)
    this.fillDescription(description)
    this.fillQuantity(quantity)
    this.submit()
  }
}

export default new ProductPage()
