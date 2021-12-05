const router = require("express").Router();
const openweathermap = require("../sources/weather/source");

router.get("/info/:city", async (req, res) => {
    let info = await openweathermap.fetchWeatherInfo(req.params.city);
    
    if(info == "Error") {
        res.send("Error occured")
    } else {
        res.send(info.city)
    }
});

module.exports = router;
