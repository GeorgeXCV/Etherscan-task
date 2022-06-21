import { ethWallet } from "../constants"

describe('Etherscan API', () => {
    it('Transactions block number is not null', () => {
         cy.request(`${Cypress.env('mainnet')}api?module=account&action=txlist&address=${ethWallet}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.apiKey}`).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.result[0]).to.not.be.null
            Cypress._.each(response.body.result, (transaction) => {
                expect(transaction.blockNumber).to.not.be.null
              })              
        })
    })
  })