describe('Pokedex', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:2121')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  }),
  it('pokemon page can be navigated to', () => {
    cy.visit('http://localhost:2121')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
