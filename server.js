const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Mock Smart AI Server Route
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  const lowerMsg = (message || '').toLowerCase();

  let reply = `That's a great question about "${message}". As your AI tutor, I suggest breaking it down into simple basic steps first before diving into advanced details.`;

  if (lowerMsg.includes('recursion')) {
    reply = "Recursion is a technique in programming where a function calls itself. Think of it like a set of Russian Matryoshka dolls: each doll contains a smaller doll inside until you reach the smallest base doll (the Base Case) that stops the sequence.";
  } else if (lowerMsg.includes('sql') || lowerMsg.includes('join') || lowerMsg.includes('database')) {
    reply = "In Database Systems, SQL Joins are used to combine rows from two or more tables based on a related column. An INNER JOIN returns records that have matching values in both tables.";
  } else if (lowerMsg.includes('css') || lowerMsg.includes('grid') || lowerMsg.includes('flexbox')) {
    reply = "CSS Grid is a 2D layout system (handles both rows and columns), making it ideal for overall web page structures. Flexbox is a 1D system (handles row OR column), ideal for aligning components inside a section.";
  } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
    reply = "Hello! I am your AI Personalized Learning Assistant. Ask me anything about Programming, Databases, or Web Development, and I'll explain it simply!";
  }

  // Real-time API response delay simulation
  setTimeout(() => {
    res.json({ reply });
  }, 400);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in Mock AI Mode on http://localhost:${PORT}`);
});