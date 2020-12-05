/* eslint-disable no-undef */
describe('User can search for movies', () => {
  describe('when logged in as registered user', () => {
    beforeEach(() => {
      cy.server()
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
      cy.route({
        url: "http://localhost:3000/api/movies",
        method: 'GET',
        response: "fixture:movies_data.json"
      })
      cy.visit('/')
      
      cy.get("[data-cy='register-button']").click();
      cy.get("[data-cy='register-form']").within(() => {
        cy.get("[data-cy='nickname']").type("fbot")
        cy.get("[data-cy='email']").type("user@mail.com")
        cy.get("[data-cy='password']").type("password")
        cy.get("[data-cy='password-confirmation']").type("password")
      });
      cy.get("[data-cy='signup-button']").click();

      cy.get('[data-cy="search-input"]').type('christmas')
      cy.get('[data-cy="search-button"]').click()
    })

    it('is expected to display search results', () => {
      cy.get('[data-cy="search-results"]').within(() => {
        cy.contains('The Christmas Chronicles: Part Two').should('exist')
        cy.contains('Operation Christmas Drop').should('exist')
        cy.contains('Angela\'s Christmas Wish').should('exist')
      })
    })

    it('is expected to not display the movie index', () => {
      cy.get('[data-cy="index"]').should("not.exist")
    });
  })
})
