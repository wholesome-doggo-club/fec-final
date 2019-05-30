const router = require('express').Router();
const path = require('path');
const controller = require('./controller.js')

router.route('/doggo1')
  .get(controller.get)  
router.route('/doggo2')
  .get(controller.get2)
module.exports = router;