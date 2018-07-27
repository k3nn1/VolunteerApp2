const router = require("express").Router();
const volunteerRoutes = require("./volunteers");
const scrapeRoutes = require('./scrape')

router.use("/volunteers", volunteerRoutes);

router.use('/scrape', scrapeRoutes);
module.exports = router;