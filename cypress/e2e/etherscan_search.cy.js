import { ethWallet } from "../constants"

describe('Etherscan Search', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Search wallet and verify transactions appear', () => {
    cy.get('#txtSearchInput').type(ethWallet + '{enter}')
    cy.get('#transactions')
      .find("tr")
      .then((row) => {
        assert.isAtLeast(row.length, 2)
    });
  })
})