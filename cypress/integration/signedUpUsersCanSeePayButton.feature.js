describe("Can see pay button", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  describe("when not authenticated", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/movies",
        response: "fixture:movies_data.json",
      });
    });

    it("is expected to be hidden", () => {
      cy.get('[data-cy="index"]').within(() => {
        cy.get('[data-cy="subscribe-button"]').should("not.be", "visible");
      });
    });
  });

  describe("when signed up user IS authenticated", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/auth",
        response: "fixture:successful_sign_up.json",
        headers: {
          uid: "user@mail.com",
          access_token: "token",
          client: "12345",
          token_type: "Bearer",
          expiry: 1000000,
        },
      });
    });

    it('is expected to be VISIBLE', () => {
      cy.get
    });


  });
});
