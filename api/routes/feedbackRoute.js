const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");
// const middlewares = require("./middlewares");y

router.post("/insert", feedbackController.createFeedback);
router.get("/getAllFeedbacks", feedbackController.getAllFeedbacks);
router.delete("/delete/:id", feedbackController.deleteFeedback);

router.put("/update/:id", feedbackController.updateFeedback);
// router.get("/getById/:id", menuController.getMenuById);
// router.get("/getPaging", menuController.getPagingMenus);

module.exports = router;
