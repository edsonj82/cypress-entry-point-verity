///<reference types="Cypress" />

export function navigate() {
    cy.visit('http://verity.com.br')
}

export function validateHomePage() {
    cy.get('[style="color:#95A2A8"]').should('contain','SOMOS HUMANOS')
    cy.get('[style="color:#95A2A8"]').should('contain','SOMOS DIGITAIS')
    cy.get('[style="color:#1C248B"]').should('contain','SOMOS VERITY_')
    //cy.get('[style="color:#808080"] > span').should('contain','Agentes de transformação inspirando protagonismo nas pessoas e gerando resultados para organizações.')
    cy.get('[style="color:#808080"]').should('contain','Agentes de transformação inspirando protagonismo nas pessoas e gerando resultados para organizações.')
    
}

export function validateVerityLab() {
    cy.get('#comp-kevyodnk5label').click()
    //cy.get('[style="font-size:20px"] > span').should('contain', 'Conteúdo exclusivo')
    cy.get('[style="color:#1C248B"]').should('contain', 'Conteúdo exclusivo')
    //cy.get('[style="font-family:wfont_382e01_61f14e9ca0ca4cfb8df13331d7dc4a3b,wf_61f14e9ca0ca4cfb8df13331d,orig_nexa_heavy"] > span').should('contain', 'VERITY LAB')
    cy.get('[style="color:#1C248B"]').should('contain', 'VERITY LAB')
}

export function verityRegister(){
    cy.get('#input_comp-kex0kjkv').type('Edson José dos Santos')
    cy.get('#input_comp-kex0kjl52').type('Theotokus')
    cy.get('#input_comp-kex0kjl73').type('edsonj82@gmail.com')
    cy.get('#input_comp-kex0kjla1').type('11-98111-1111')
    cy.get('._2n1ep').click()
    cy.get('._3fUtn').click()
}