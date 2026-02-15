const { addEntry } = require('./_leaderboard');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  
  const { name, steps, time } = req.body || {};
  if (!name || !steps) return res.status(400).json({ error: 'Missing name or steps' });
  
  const entries = addEntry(name.slice(0, 20), Number(steps), Number(time) || 0);
  res.json({ success: true, rank: entries.findIndex(e => e.name === name.slice(0, 20)) + 1 });
};
