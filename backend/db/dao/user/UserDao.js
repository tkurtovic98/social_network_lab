const dbo = require("../../conn");

const createUser = async (userDto) => {
  let dbConnect = dbo.getDb();

  let user = { ...userDto };

  const one = await dbConnect
    .collection("users")
    .findOne({ email: user.email });

  if (one) {
    return one;
  }

  let insert = await dbConnect.collection("users").insertOne(user);

  if (insert.insertedId) {
    return await dbConnect.collection("users").findOne({ email: user.email });
  } else {
    return null;
  }
};

module.exports = { createUser };
