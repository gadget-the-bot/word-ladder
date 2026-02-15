const { isValidWord, diffByOne } = require('./_words');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  
  const { word, previousWord } = req.body || {};
  if (!word || !previousWord) return res.status(400).json({ error: 'Missing word or previousWord' });
  
  const w = word.toLowerCase();
  const p = previousWord.toLowerCase();
  const valid = isValidWord(w);
  const oneOff = diffByOne(w, p);
  
  res.json({ valid: valid && oneOff, isWord: valid, isOneOff: oneOff, word: word.toUpperCase() });
};
