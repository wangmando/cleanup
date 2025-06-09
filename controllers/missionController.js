const missionModel = require('../models/missionModel');

async function getRandomMission(req, res) {
  try {
    const mission = await missionModel.getRandomMission();
    res.json({ mission });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const userMissionModel = require('../models/userMissionModel');

async function completeMission(req, res) {
  try {
    const userId = req.user.userId; // JWT 인증 미들웨어에서 세팅됨
    const { missionId } = req.body;

    if (!missionId) {
      return res.status(400).json({ error: 'missionId가 필요합니다.' });
    }

    const completionId = await userMissionModel.saveMissionCompletion(userId, missionId);
    res.status(201).json({ message: '미션 완료가 저장되었습니다.', completionId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deferMission(req, res) {
  try {
    const userId = req.user.userId;
    const { missionId } = req.body;

    if (!missionId) {
      return res.status(400).json({ error: 'missionId가 필요합니다.' });
    }

    const deferId = await userMissionModel.saveUserMission(userId, missionId, 'deferred');
    res.status(201).json({ message: '미션을 미뤘습니다.', deferId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}



module.exports = {
  getRandomMission,
  completeMission,
  deferMission
};
