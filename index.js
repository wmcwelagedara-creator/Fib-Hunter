// index.js
const express = require('express');
const app = express();
app.use(express.json());

let trades = []; // In-memory storage (or use free DB like Render Postgres)

// POST trade from master
app.post('/trade', (req, res) => {
  const { symbol, action, lot, timestamp } = req.body;
  trades.push({ symbol, action, lot, timestamp });
  res.json({ status: 'Trade received', symbol, action });
});

// GET trades for slave
app.get('/trades', (req, res) => {
  res.json(trades);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(Running on port ${PORT}));
