# Test ERC721 contract

Test lower gas contract.

In initial commit mine production contract that will be used as a base line for gas consumption. 

Initial deploy consumed gas (0xCF6e02Dbf080561F455a02bB47B7476158A440f0): 2,465,887. 

Consumed gas by 1 NFT minting: 146,972

Consumed gas by 5 NFT minting: 612,060

Lower gas contract deploy (0x37E798bB913998BaA7fe48aAA6844C12Ba1569c0): 2,491,440

Consumed gas by 1 NFT minting: 208,970

Consumed gas by 5 NFT minting: 618,582

Actual lower gas contract from hashlips (0x1946625E2CA5a780D03F2F86a446cc3C67662BBe):

Deploy: 2,190,879

Consumed gas by 1 NFT minting: 65,573

Consumed gas by 5 NFT minting: 167,849

## Deploy stages

1. Install truffle globaly:
`npm install -g truffle`

2. Install hd provider and other modules:
`npm i`

3. Set config values in `.config` file
`cp .config.sample.json .config`

4. Let's deploy
`truffle deploy --network rinkeby`
