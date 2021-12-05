const dbo = require("../../conn");
const collectionName = "nft-collections";

const createNft = async (nftDto) => {
  let dbConnect = dbo.getDb();

  let nft = { ...nftDto };

  const one = await findOne(nft.name);

  if (one) {
    return one;
  }

  let insert = await dbConnect.collection(collectionName).insertOne(nft);

  if (insert.insertedId) {
    return await findOne(nft.name);
  } else {
    return null;
  }
};

const findOne = async (nftCollectionName) => {
  let one = await dbo
    .getDb()
    .collection(collectionName)
    .findOne({ name: nftCollectionName });

  if(one) delete one["_id"]
  return one;
};

module.exports = { createNft, findOne };
