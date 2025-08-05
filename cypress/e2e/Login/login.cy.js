/// <reference types ="Cypress"/>
import mensagens from '../../fixtures/mensagens.json';

describe('Valida todos os cenários de login', () => {
 context('Efetuando Login',() =>{ 
    it('Login com sucesso', () => {
      cy.login('standard_user', 'secret_sauce');
     cy.get('[data-teAst="title"]').should('contain','Product')
    })
})
    it('Login com credenciais inválidas', () => {
      cy.login('usuarioinvalido','senhainvalida');
      cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service').should('be.visible')     
    });
});
