const express = require("express");
const router = express.Router();

const tourControllers = require("../controllers/tourControllers.js");

router.param("id", tourControllers.checkId);

router.get("/", tourControllers.getAllTours);
router.post("/", tourControllers.checkBody, tourControllers.createTour);
router.get("/:id", tourControllers.getTour);
router.patch("/:id", tourControllers.updateTour);
router.delete("/:id", tourControllers.deleteTour);

module.exports = router;
