// Simple Express server to persist wishes to data/wishes.json
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
// small CORS helper so no external dependency needed
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});
app.use(express.json());

const DATA_DIR = path.join(__dirname, '..', 'src', 'data');
const WISHES_FILE = path.join(DATA_DIR, 'wishes.json');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(WISHES_FILE)) fs.writeFileSync(WISHES_FILE, '[]', 'utf8');

app.get('/wishes', (req, res) => {
  try {
    const raw = fs.readFileSync(WISHES_FILE, 'utf8');
    const data = JSON.parse(raw || '[]');
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Unable to read wishes file' });
  }
});

app.post('/wishes', (req, res) => {
  try {
    const { name, wish, ts } = req.body;
    if (!name || !wish) return res.status(400).json({ error: 'Invalid body' });

    const entry = { name, wish, ts: ts || new Date().toISOString() };
    const raw = fs.readFileSync(WISHES_FILE, 'utf8');
    const arr = JSON.parse(raw || '[]');
    arr.push(entry);
    fs.writeFileSync(WISHES_FILE, JSON.stringify(arr, null, 2), 'utf8');
    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ error: 'Unable to save wish' });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Wishes server running at http://localhost:${port}`));
