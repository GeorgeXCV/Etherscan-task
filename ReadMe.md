# Etherscan task

To setup project run ```npm install```

For API test to pass, get a key [here](https://docs.etherscan.io/getting-started/viewing-api-usage-statistics) and create a .env file ```apiKey=YOUR_KEY_HERE```

Can run tests in headless browser using ```npm run test:e2e``` or using Cypress client ```npm run cypress:open```

Tests cover the following scenarios:
1. User navigates to https://etherscan.io > Verify the Market cap field under the search bar is not empty(you may click into it to verify) > Using the search bar enter a wallet address(0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a) into the search bar > Search > Verify the user has transactions returned greater than 2
2. Create an API test for: https://docs.etherscan.io/api-endpoints/accounts#get-a-list-of-normal-transactions-by-address (0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a) with an assertion that loops through the response and verifies the json field “blockNumber” is not null for all the returned response.