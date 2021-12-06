const dbo = require("../conn")

const upsertOrFind = async (collection, dto) => {
  let dbConnect = dbo.getDb();

  let model = { ...dto };

  const one = await findOne(model.name);

  if (one) {
    return one;
  }

  let insert = await dbConnect.collection(collection).insertOne(model);

  if (insert.insertedId) {
    return await findOne(model.name);
  } else {
    return null;
  }
};

const findOne = async (collection, queryName) => {
  let one = await dbo
    .getDb()
    .collection(collection)
    .findOne({ name: queryName });

  if (one) delete one["_id"];
  return one;
};

module.exports = { upsertOrFind, findOne };
