/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        cy.addProdutos('Livingston All-Purpose Tight', 32, 'Black', 1)
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(1) > a').click()
        cy.addProdutos('Zeppelin Yoga Pant', 34, 'Green', 2)
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(1) > a').click()
        cy.addProdutos('Kratos Gym Pant', 36, 'Blue', 1)
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(1) > a').click()
        cy.addProdutos('Geo Insulated Jogging Pant', 33, 'Red', 4)
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').type('Ryan')
        cy.get('#billing_last_name').type('Moraes')
        cy.get('#billing_company').type('EBAC')
        cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type('Manoel dias')
        cy.get('#billing_address_2').clear().type('453')
        cy.get('#billing_city').clear().type('sao paulo')
        cy.get('#select2-billing_state-container').click().type('sao paulo').get('[aria-selected="true"]').click()
        cy.get('#billing_postcode').clear().type('02563-010')
        cy.get('#billing_phone').clear().type(11937812834)
        cy.get('#billing_email').clear().type('ryanlokino@teste.com')
        cy.get('#createaccount').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('#account_password').type('659293132Ry;')
        cy.get('#place_order').click()
    });


})
