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
        url: "http://localhost:3000/api/movies",
        method: 'GET',
        response: "fixture:search_for_christmas_results.json"
      })
      cy.visit('/')
      cy.get('[data-cy="search-input"]').type('christmas')
      cy.get('[data-cy="search-button"]').click()
    })

    it('is expected to display search results', () => {
      cy.get('[data-cy="search-results"]').within(() => {
        cy.get('li').contains('The Christmas Chronicles: Part Two').should('exist')
        cy.get('li').contains('Operation Christmas Drop').should('exist')
        cy.get('li').contains('Angela\'s Christmas Wish').should('exist')
      })
    })
  })
})
