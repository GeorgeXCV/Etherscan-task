describe('Etherscan Home', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Market Cap field is not empty', () => {
      cy.get('[data-title="View More"]').invoke('text').then((text) => {
        text = text.replace('$', '').trim()
        return text
      }).then((text) => {
        assert.isAtLeast(parseFloat(text.replace(/,/g, "")), 1)
      })
    })
  })