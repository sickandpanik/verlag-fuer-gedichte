const { assert, expect } = require("chai");
const { ethers } = require("hardhat");

describe("Poem NFT Contract", function () {
  let poem;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();

    const factory = await ethers.getContractFactory("Poem");
    poem = await factory.deploy(owner.address);
    await poem.deployed();
  });

  it("should deploy with correct name and symbol", async () => {
    expect(await poem.name()).to.equal("Gedicht");
    expect(await poem.symbol()).to.equal("GDCHT");
  });

  it("should allow only owner to publish a poem", async () => {
    const uri = "ipfs://example-uri";

    // Owner publishes a poem
    const tx = await poem.publishAPoem(addr1.address, uri);
    await tx.wait();

    const tokenId = 0;
    expect(await poem.ownerOf(tokenId)).to.equal(addr1.address);
    expect(await poem.tokenURI(tokenId)).to.equal(uri);

    // Non-owner cannot publish
    const connectedPoem = poem.connect(addr1);
    try {
      await connectedPoem.publishAPoem(addr1.address, uri);
      assert(false, "Expected reverted transaction");
    } catch (err) {
      expect(err.message).to.contain("Ownable: caller is not the owner");
    }
  });

  it("should increment token IDs", async () => {
    await poem.publishAPoem(addr1.address, "ipfs://1");
    await poem.publishAPoem(addr1.address, "ipfs://2");

    expect(await poem.ownerOf(0)).to.equal(addr1.address);
    expect(await poem.ownerOf(1)).to.equal(addr1.address);
  });

  it("should allow token burning", async () => {
    await poem.publishAPoem(addr1.address, "ipfs://burnable");
    const tokenId = 0;

    // Must connect as token owner to burn
    await poem.connect(addr1).burn(tokenId);
    try {
      await poem.ownerOf(tokenId);
      assert(false, "Expected reverted transaction");
    } catch (err) {
      expect(err.message).to.contain("ERC721NonexistentToken");
    }
  });

  it("should support ERC721 and ERC721Metadata interfaces", async () => {
    // ERC721 = 0x80ac58cd, ERC721Metadata = 0x5b5e139f
    expect(await poem.supportsInterface("0x80ac58cd")).to.be.true;
    expect(await poem.supportsInterface("0x5b5e139f")).to.be.true;
  });
});