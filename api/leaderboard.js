const { getLeaderboard } = require('./_leaderboard');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({ entries: getLeaderboard() });
};
