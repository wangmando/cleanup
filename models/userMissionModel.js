const db = require('../config/db');

async function saveUserMission(userId, missionId, status) {
  const [result] = await db.query(
    'INSERT INTO user_missions (user_id, mission_id, status) VALUES (?, ?, ?)',
    [userId, missionId, status]
  );
  return result.insertId;
}

module.exports = {
  saveUserMission
};
