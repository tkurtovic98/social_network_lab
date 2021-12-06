const router = require("express").Router();
const fetchWeatherInfo = require("../sources/weather/source");

router.get("/info/:city", async (req, res) => {
  let info = await fetchWeatherInfo(req.params.city);

  if (info == "Error") {
    res.send("Error occured");
  } else {
    res.send(info);
  }
});

module.exports = router;
