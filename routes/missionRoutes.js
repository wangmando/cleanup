const express = require('express');
const router = express.Router();
const missionController = require('../controllers/missionController');
const authenticateToken = require('../middlewares/authMiddleware');

router.get('/random', authenticateToken, missionController.getRandomMission);
router.post('/complete', authenticateToken, missionController.completeMission);
router.post('/defer', authenticateToken, missionController.deferMission);


module.exports = router;
