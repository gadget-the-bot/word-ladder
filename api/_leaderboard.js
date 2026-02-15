// Simple in-memory leaderboard that resets daily
const leaderboard = {};

function getToday() {
  return new Date().toISOString().split('T')[0];
}

function getEntries() {
  const today = getToday();
  if (!leaderboard[today]) leaderboard[today] = [];
  // Clean old days
  for (const key of Object.keys(leaderboard)) {
    if (key !== today) delete leaderboard[key];
  }
  return leaderboard[today];
}

function addEntry(name, steps, time) {
  const entries = getEntries();
  entries.push({ name, steps, time, ts: Date.now() });
  entries.sort((a, b) => a.steps - b.steps || a.time - b.time);
  if (entries.length > 100) entries.length = 100;
  return entries;
}

function getLeaderboard() {
  return getEntries().slice(0, 20);
}

module.exports = { addEntry, getLeaderboard };
