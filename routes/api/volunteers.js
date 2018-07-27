const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/books"
router.route("/")
    .get(controller.findAll)
    .post(controller.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(controller.findById)
    .put(controller.update)
    .delete(controller.remove);


router
    .route("/findResults")
    .post(controller.findResults)

    /**
     * api/findResults
     * POST
     * {
     *      opportunity: Landscaping
     *      location: Denver
     *      date: 07/31/2018 
     * }
     */
    
    
    

module.exports = router;