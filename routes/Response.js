const express = require("express");

const ResponseController = require("../Controller/ResponseController");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

// route private
// method POST
// route api/response/:blogid
router.post("/:blogId", isAuth, ResponseController.addResponse);

// route private
// method PUT
// route api/response/:responsrid
router.put("/:responseId", isAuth, ResponseController.editResponse);

// route public 
// method GET
// route api/response/:blogid
router.get('/:blogId')  // TODO get response function and controller

module.exports = router;
