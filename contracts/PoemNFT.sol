// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts@5.0.0/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@5.0.0/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@5.0.0/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts@5.0.0/access/Ownable.sol";

contract Poem is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
    uint256 private _nextTokenId;

    constructor(address initialOwner)
        ERC721("Gedicht", "GDCHT")
        Ownable(initialOwner)
    {}

    function publishAPoem(address to, string memory uri)
        public
        onlyOwner

        returns (uint256)
    {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

        return tokenId;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
