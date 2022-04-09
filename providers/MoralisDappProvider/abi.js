 const ABI= [
      {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "itemId",
                  "type": "uint256"
              },
              {
                  "indexed": true,
                  "internalType": "address",
                  "name": "nftContract",
                  "type": "address"
              },
              {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
              },
              {
                  "indexed": false,
                  "internalType": "address",
                  "name": "seller",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
              },
              {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
              },
              {
                  "indexed": false,
                  "internalType": "bool",
                  "name": "sold",
                  "type": "bool"
              }
          ],
          "name": "MarketItemCreated",
          "type": "event"
      },
      {
          "anonymous": false,
          "inputs": [
              {
                  "indexed": true,
                  "internalType": "uint256",
                  "name": "itemId",
                  "type": "uint256"
              },
              {
                  "indexed": false,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
              }
          ],
          "name": "MarketItemSold",
          "type": "event"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "nftContract",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
              },
              {
                  "internalType": "uint256",
                  "name": "price",
                  "type": "uint256"
              }
          ],
          "name": "createMarketItem",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "nftContract",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "itemId",
                  "type": "uint256"
              }
          ],
          "name": "createMarketSale",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "fetchMarketItems",
          "outputs": [
              {
                  "components": [
                      {
                          "internalType": "uint256",
                          "name": "itemId",
                          "type": "uint256"
                      },
                      {
                          "internalType": "address",
                          "name": "nftContract",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "tokenId",
                          "type": "uint256"
                      },
                      {
                          "internalType": "address payable",
                          "name": "seller",
                          "type": "address"
                      },
                      {
                          "internalType": "address payable",
                          "name": "owner",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "price",
                          "type": "uint256"
                      },
                      {
                          "internalType": "bool",
                          "name": "sold",
                          "type": "bool"
                      }
                  ],
                  "internalType": "struct marketPlaceBoilerPlate.MarketItem[]",
                  "name": "",
                  "type": "tuple[]"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "owner",
          "outputs": [
              {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      }
  ]
  