describe('User can become subscriber', () => {
  describe('Successfully', () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/api/auth',
        response: "fixture:successful_sign_up.json",
        headers: {
          uid: 'user@mail.com',
          access_token: 'token',
          client: '12345',
          token_type: "Bearer",
          expiry: 1000000
        }
      })
      cy.route({
        url: "http://localhost:3000/api/movies/search",
        method: 'GET',
        response: "fixture:search_for_christmas_results.json"
      })
      cy.visit("/")
    })

    it("successfully with valid credentials", () => {
      cy.get("[data-cy='register-button']").click();
      cy.get("[data-cy='register-form']").within(() => {
        cy.get("[data-cy='nickname']").type("fbot")
        cy.get("[data-cy='email']").type("user@mail.com")
        cy.get("[data-cy='password']").type("password")
        cy.get("[data-cy='password-confirmation']").type("password")
      });
      cy.get("[data-cy='signup-button']").click();

    });
    it('by filling in valid credit card information', () => {
      cy.get("[data-cy='subscribe-button']").click()
      cy.get("[data-cy='payment-form']").should('exist')
    });

  })
})