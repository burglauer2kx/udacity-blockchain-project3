## UML ##

![Activity diagram](/activity.drawio.png)
![Class diagram](/class.drawio.png)
![Sequence diagram](/sequence.png)
![State diagram](/state.drawio.png)

## Libraries ##

- truffle - local ethereum blockchain and development environment
- web3 - API to interact with ethereum blockchain via Javascript

## IPFS ##

- IPFS is not used

## Truffle ##

truffle version
Truffle v4.1.14 (core: 4.1.14)
Solidity v0.4.24 (solc-js)

## Run tests ##

truffle test

## Run frontend ##

1. Contract owner to click on "Assign roles" to assign the necessary roles to the involved parties
2. Farmer can "Harvest" a product with the details defined in the form
3. Farmer to move the product through the workflow: "Process" > "Pack" > "ForSale"
4. Distributor can "Buy" and "Ship" a product
5. Retailer can "Receive" a product
6. Consumer can "Purchase" a product
7. All actions are logged in the transaction history
8. Everybody and use "Fetch Data 1" and "Fetch Data 2" to view the details of a Farm/Product

## Rinkeby ##

- Supply chain contract: https://rinkeby.etherscan.io/address/0xff8868d81a7432905af688ade1ddcadbf43116ef
- Transaction: https://rinkeby.etherscan.io/tx/0x314a99361253627576432c3a2ce1f4c837cb2a4f2223b719dfea6a21118ba53e