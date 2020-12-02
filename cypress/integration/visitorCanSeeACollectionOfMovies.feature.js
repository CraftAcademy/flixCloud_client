/* eslint-disable no-undef */
describe("Visitor can see", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/movies",
      response: "fixture:movies_data.json",
    });
    cy.visit("/");
  });

  it("a collection of movies", () => {
    cy.get('[data-cy="index"]').within(() => {
      cy.contains("The Notebook");
      cy.contains("A Promise");
      cy.contains("A Christmas Movie");
    });
  });
});
