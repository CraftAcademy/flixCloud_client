/* eslint-disable no-undef */
describe("Visitor can ", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("successfully", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/movies",
        response: "fixture:movies_data.json",
      });
    });

    it("see a collection of movies", () => {
      cy.get('[data-cy="index"]').within(() => {
        cy.contains("The Notebook");
        cy.contains("A Promise");
        cy.contains("A Christmas Story");
        cy.contains("Star Trek II: The Wrath Of Khan");
      });
    });
  });

  describe("not if no response data is given", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/movies",
        response: {},
      });
    });
    it("see a collection of movies", () => {
      cy.get('[data-cy="index"]').should("not.exist");
    });
  });
});
