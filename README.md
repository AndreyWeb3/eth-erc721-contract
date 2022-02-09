# Test ERC721 contract

Test lower gas contract.

In initial commit mine production contract that will be used as a base line for gas consumption. 

Initial deploy consumed gas: 2,465,887. 

Consumed gas by 1 NFT minting: 146,972

Consumed gas by 5 NFT minting: 612,060

## Deploy stages

1. Install truffle globaly:
`npm install -g truffle`

2. Install hd provider and other modules:
`npm i`

3. Set config values in `.config` file
`cp .config.sample.json .config`

4. Let's deploy
`truffle deploy --network rinkeby`
