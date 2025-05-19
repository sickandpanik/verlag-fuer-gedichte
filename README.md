# Verlag für Gedichte—“Poem Publisher”

This is a smart contract which publishes poems stored in images 
as NFTs (ERC721 smart contracts) and returns token ID 
(which looks like GDCHT2#????) to the owner.
IPFS is used for storage of the poems.

Actual NFC implementation as per ERC721 is provided by OpenZeppelin
libraries.

The only not-overriden public method is `publishAPoem(address to, string memory uri)`
which produces a new NFT token issued to `to` address.

## Deploying to Sepolia

Open [Remix IDE](https://remix.ethereum.org), clone this repository,
then select “Deploy & run transactions” in the left menu. 
I proceeded with [MetaMask](https://metamask.io/en-GB) wallet & plugin as 
computation environment and 
[Alchemy faucet](https://www.alchemy.com/faucets/ethereum-sepolia)
to get some test ETH. After everything is set up, deploy a contract, then
in the very same menu send a request for `publishAPoem` transaction.

To run the tests, right-click on `./tests/PoemNFT.test.js` in the left bar of
Remix and select Run. For some reason, one of these tests (`should allow only owner to publish a poem`)
fails in Remix IDE—I couldn't fix that for a few hours, so please help me (or just tell me to install hardhat locally).

[My very own deployed & verified contract in Sepolia](https://sepolia.etherscan.io/address/0x64a08dcfced046c5b598f2587d2fba9e428b1b0e#code).

## References

[How to Create and Deploy an ERC-721 (NFT) | QuickNode Guides](https://www.quicknode.com/guides/ethereum-development/nfts/how-to-create-and-deploy-an-erc-721-nft)

[ERC-721 - OpenZeppelin Docs](https://docs.openzeppelin.com/contracts/5.x/erc721)