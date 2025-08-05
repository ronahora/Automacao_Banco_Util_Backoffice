/// <reference types ="Cypress"/>
import { el } from "../fixtures/elements";
describe('Fluxo no Carrinho de compras', () => {
         
    
        it('Adiciona um item ao carrinho e valida os detalhes', () => {
            cy.login('standard_user', 'secret_sauce');
            cy.add_iten_no_carrinho()
            cy.get(el.price).should('contain', '$29.99');
        });

        it('Remove um item do carrinho e valida carrinho vázio', () => {
            cy.login('standard_user', 'secret_sauce');
            cy.add_iten_no_carrinho()
            cy.remove_iten_no_carrinho()
            cy.get('.shopping_cart_badge').should('not.exist');
        });
    });
