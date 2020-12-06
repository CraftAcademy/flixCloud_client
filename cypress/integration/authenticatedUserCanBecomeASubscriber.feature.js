/* eslint-disable no-undef */
describe("User can see subscribe button", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/movies",
      response: "fixture:movies_data.json",
    });
    cy.visit("/");
  });

  describe("when not authenticated", () => {
    it("is expected to be hidden", () => {
      cy.get('[data-cy="index"]').within(() => {
        cy.get('[data-cy="subscribe-button"]').should("not.be", "visible");
      });
    });
  });

  describe("when authenticated", () => {
    it("is expected to be VISIBLE", () => {
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

      cy.get("[data-cy='register-button']").click();
      cy.get("[data-cy='register-form']").within(() => {
        cy.get("[data-cy='nickname']").type("fbot");
        cy.get("[data-cy='email']").type("user@mail.com");
        cy.get("[data-cy='password']").type("password");
        cy.get("[data-cy='password-confirmation']").type("password");
      });
      cy.get("[data-cy='signup-button']").click();
      cy.get('[data-cy="subscribe-button"]').click();
      cy.get("[data-cy='payment-form']").should("exist");
    });

    it("by filling in valid credit card information ", () => {
      cy.get("[data-cy='payment-form']").within(() => { });
      cy.wait(1000);
      cy.get('[data-cy="card-number"]').within(() => {
        cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
          const $body = $iframe.contents().find("body");
          cy.wrap($body)
            .find('input[name="cardnumber"]')
            .type("4242424242424242", { delay: 50 });
        });
      });
    });
  });
});
