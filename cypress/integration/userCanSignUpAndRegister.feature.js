describe('User authenticates', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("successfully with valid credentials", () => {
    cy.get("[data-cy='register-button']").click();
    cy.get("[data-cy='register-form']").within(() => {
      cy.get("[data-cy='nickname']").type("fbot")
      cy.get("[data-cy='email']").type("user@mail.com")
      cy.get("[data-cy='password']").type("password")
      cy.get("[data-cy='password-confirmation']").type("password")
      cy.get("[data-cy='signup-button']").click()
    });
    cy.get("[data-cy='search-button']").should("contain", "Search");
  });
});
