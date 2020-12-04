describe('User authenticates', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("successfully with valid credentials", () => {
    cy.get("[data-cy='login_form']").within(() => {
      cy.get("[data-cy='nickname']").type("fbot")
      cy.get("[data-cy='email']").type("user@mail.com")
      cy.get("[data-cy='password']").type("password")
      cy.get("[data-cy='password_confirmation']").type("password")
      cy.get("[data-cy='login_button']").type('Submit').click()
    });
    cy.get("[data-cy='greeting_message']").should("contain", "Hi there fbot");
  })
})
