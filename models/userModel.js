const db = require('../config/db');

// 사용자 등록
async function createUser(email, password, nickname) {
  const [result] = await db.query(
    'INSERT INTO users (email, password, nickname) VALUES (?, ?, ?)',
    [email, password, nickname]
  );
  return result.insertId;
}

module.exports = {
  createUser,
};

async function findUserByEmail(email) {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0]; // 이메일은 unique이므로 하나만 반환
  }
  
  module.exports = {
    createUser,
    findUserByEmail
  };
  