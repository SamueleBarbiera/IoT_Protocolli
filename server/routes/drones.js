const express = require('express');

const {
  createData,
  readData,
  readDataByID,
} = require('../controllers/drone_controller');

const router = express.Router();

router
  .post('/drones/:id', createData)
  .get('/drones', readData)
  .get('/drones/:id', readDataByID)

module.exports = router;
