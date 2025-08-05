import { faker } from '@faker-js/faker';
/// <reference types ="Cypress"/>
import { el } from "../fixtures/elements";

        it.only('Valida campos vazios com mensagem de erro no carrinho', () => {
                cy.login('standard_user', 'secret_sauce');
                cy.get(el.btn_add).click();
                cy.get('.shopping_cart_badge').should('contain', '1');
                cy.get('.shoApping_cart_link').click();
                cy.get(el.btn_checkout).click();
                cy.location('pathname').should('eq', '/checkout-step-one.html')
                 });

        it('Validar campos vazios no checkout',() => {
                cy.login('standard_user', 'secret_sauce');
                cy.get(el.btn_add).click();
                cy.get('.shopping_cart_badge').should('contain', '1');
                cy.get('.shopping_cart_link').click();
                cy.get(el.btn_checkout).click();
                cy.get(el.btn_continue).click();
                cy.get('.error-message-container').should('be.visible').and('contain', 'Error: First Name is required');
                //Ou pode se usar, exemplo abaixo:
                cy.contains('Error: First Name is required').should('be.visible');
                // Preenche primeiro nome e tenta continuar
                cy.get('[data-test="firstName"]').type("Pedro Lucas");
                cy.get(el.btn_continue).click();
                cy.get('.error-message-container').should('be.visible').and('contain', 'Error: Last Name is required');
                // Preenche último nome e tenta continuar
                cy.get('[data-test="lastName"]').type("Cavejon - Teste");
                cy.get(el.btn_continue).click();
                cy.get('.error-message-container').should('be.visible').and('contain', 'Error: Postal Code is required');
                // Insere os dados completos
                cy.get('[data-test="postalCode"]').type("89231-552");
                cy.get(el.btn_continue).click();
                 });
       
        it('Adiciona um item ao carrinho e finaliza a compra', function () {
                cy.login('standard_user', 'secret_sauce');
                cy.get(el.btn_add).click();
                cy.get('.shopping_cart_badge').should('contain', '1');
                cy.get('.shopping_cart_link').click();

                // Clique do botão e avanço
                cy.get(el.btn_checkout).click();
                cy.location('pathname').should('eq', '/checkout-step-one.html');


                // Insere os dados gerados nos campos
                cy.get('[data-test="firstName"]').type("Pedro Lucas");
                cy.get('[data-test="lastName"]').type("Cavejon - Teste");
                cy.get('[data-test="postalCode"]').type("89231-552");
                cy.get(el.btn_continue).click();

                // Valida se o item aparece no carrinho
                cy.get('.cart_item').should('be.visible');
                cy.get(el.title).should('contain', 'Sauce Labs Backpack');
                cy.get(el.description).should('contain', 'carry.allTheThings()');
                cy.get(el.price).should('contain', '$29.99');
                cy.get('[data-test="finish"]').click();

                // Validar texto final
                cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
                cy.get('[data-test="complete-text"]').should(
                    'have.text',
                    'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
                );

            });
        


