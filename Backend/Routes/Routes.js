const express = require('express')
const router = express.Router();
const controller = require('../Controllers/Controllers');

//GET Requests
router.route('/get/shows').get(controller.getShows);
router.route('/get/shows/:id').get(controller.getShow);
router.route('/get/comments/:id').get(controller.getComments);

//POST Requests
router.route('/register/user').post(controller.registerUser);
router.route('/register/comment').post(controller.registerComment)

module.exports = router;