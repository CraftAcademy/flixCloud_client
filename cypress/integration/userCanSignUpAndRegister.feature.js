describe('User authenticates', () => {
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
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/movies",
      response: "fixture:movies_data.json",
    });
    cy.visit("/")
    });

  it("successfully with valid credentials", () => {
    cy.get("[data-cy='register-button']").click();
    cy.get("[data-cy='register-form']").within(() => {
      cy.get("[data-cy='nickname']").type("fbot")
      cy.get("[data-cy='email']").type("user@mail.com")
      cy.get("[data-cy='password']").type("password")
      cy.get("[data-cy='password-confirmation']").type("password")
    });
    cy.get("[data-cy='signup-button']").click();
    cy.get("[data-cy='search-button']").should("exist");
  });
});
