const router = require("express").Router();
const fetchNftData = require('../sources/nfts/source')

const collectionNames = ["doodles-official"];

router.get("", (req, res)=> { res.redirect("/") })

router.get("/info", async (req, res) => {
  let nftData = await fetchNftData(collectionNames[0])

  if(nftData == "Error") {
    res.send("Error occured!")
  } else {
    res.json(nftData) 
  }
});

module.exports = router;
