/* eslint-disable no-undef */
describe("Visitor can see", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("a collection of movies", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/movies",
        response: "fixture:movies_data.json",
      });
    });

    it("successfully", () => {
      cy.get('[data-cy="index"]').within(() => {
        cy.contains("The Notebook");
        cy.contains("A Promise");
        cy.contains("A Christmas Movie");
      });
    });
  });
});
