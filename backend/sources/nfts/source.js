const fetch = require("node-fetch");
const nft = require("../../db/dao/nfts/NftDao");
const Nft = require('../../structs/Nft')

const options = { method: "GET" };
const openSeaApiUrl = (name) =>
  `https://api.opensea.io/api/v1/collection/${name}/stats`;

const fetchNftData = async (collectionName) => {
  let storedNftCollection = await nft.findOne(collectionName);

  if (storedNftCollection) {
    return storedNftCollection;
  }

  let nftCollectionUrl = openSeaApiUrl(collectionName);

  return fetch(nftCollectionUrl, options)
    .then((response) => response.json())
    .then(async (response) => {
      console.log(response);
      await nft.createNft(
        new Nft(
          response.stats.floor_price,
          response.stats.market_cap,
          response.stats.num_owners,
          collectionName
        )
      );

      return await nft.findOne(collectionName);
    })
    .catch((err) => "Error");
}

module.exports = fetchNftData