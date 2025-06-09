const db = require('../config/db');

async function getRandomMission() {
  const [rows] = await db.query(
    'SELECT * FROM missions WHERE is_active = TRUE ORDER BY RAND() LIMIT 1'
  );
  return rows[0];
}

module.exports = {
  getRandomMission,
};
