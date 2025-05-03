# Verlag für Gedichte—“Poem Publisher”

This is a smart contract which publishes poems stored in images 
as NFTs (ERC721 smart contracts) and returns token ID 
(which looks like GDCHT#????) to the owner.
IPFS is used for storage of the poems.

## Deploying to Sepolia

Open [Remix IDE](https://remix.ethereum.org), clone this repository,
then select “Deploy & run transactions” in the left menu. 
I proceeded with [MetaMask](https://metamask.io/en-GB) wallet & plugin as 
computation environment and 
[Alchemy faucet](https://www.alchemy.com/faucets/ethereum-sepolia)
to get some test ETH. After everything is set up, deploy a contract, then
in the very same menu send a request for `publishAPoem` transaction.

[My very own NFT in Sepolia](https://sepolia.etherscan.io/nft/0x175977a796954460296f91c2db2d790731e6f248/0).

## References

[How to Create and Deploy an ERC-721 (NFT) | QuickNode Guides](https://www.quicknode.com/guides/ethereum-development/nfts/how-to-create-and-deploy-an-erc-721-nft)

[ERC-721 - OpenZeppelin Docs](https://docs.openzeppelin.com/contracts/5.x/erc721)