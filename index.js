const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const missionRoutes = require('./routes/missionRoutes');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/missions', missionRoutes);

app.get('/', (req, res) => {
  res.send('치워조이 백엔드 서버 실행 중!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다`);
});

const db = require('./config/db');

app.get('/db-test', async (req, res) => {
    try {
      const [rows] = await db.query("SELECT CURRENT_TIMESTAMP() AS now_time");
      res.json(rows);  // ✅ rows로 보내기
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  const userRoutes = require('./routes/userRoutes');
  app.use('/api/users', userRoutes);

