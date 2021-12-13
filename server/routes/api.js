const express = require('express');

const {
  createData,
  readData,
} = require('../controllers/user_controller');

const router = express.Router();

router
  .post('/drones/:id', createData)
  .get('/drones', readData)
  .getID('/drones/:id', readDataByID)

module.exports = router;
