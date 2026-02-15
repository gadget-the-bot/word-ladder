const { getDailyPuzzle } = require('./_words');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const puzzle = getDailyPuzzle();
  res.json({ start: puzzle.start, end: puzzle.end, optimalSteps: puzzle.optimalSteps, date: puzzle.date });
};
