const express = require('express');
const router = express.Router();

// ✅ 여기 꼭 있어야 합니다!
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');
// 📌 여기에 함수 연결


router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

router.get('/me', authenticateToken, (req, res) => {
    res.json({ message: '인증된 사용자입니다.', user: req.user });
  });
module.exports = router;
