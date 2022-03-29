describe("Home Page", () => {
  it("displays all 3 products on the home page", () => {
    cy.visit("http://localhost:3000")
    cy.get('[data-test="product-tag"]')
      .eq(0)
      .within(() => {
        cy.get('[data-test="product-name"]')
          .should('contain', 'New Short Sleeve T-Shirt')
        cy.get('[data-test="product-price"]')
          .should('contain', '$25.00 USD')

        
      })
  })

})
