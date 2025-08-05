/// <reference types= "Cypress" />
import { el } from "../fixtures/elements";
Cypress.Commands.add('add_iten_no_carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');
    cy.get('.shopping_cart_link').click();
    // Valida se o item aparece no carrinho
    cy.get('.cart_item').should('be.visible');
    cy.get(el.title).should('contain', 'Sauce Labs Backpack');
    cy.get(el.description).should('contain', 'carry.allTheThings()');
});

Cypress.Commands.add('remove_iten_no_carrinho',() => {
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
    cy.get('.shopping_cart_badge').should('contain', '1');
    // Remove o item do carrinho
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

})