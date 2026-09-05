
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    // Check API key
    if (!apiKey) {
      return res.status(500).json({
        error: "GEMINI_API_KEY is missing in .env file",
      });
    }

    // Check message
    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    // Gemini API
    const url =
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`;

    const response = await axios.post(
      url,
      {
        contents: [
          {
            parts: [
              {
                text: message,
              },
            ],
          },
        ],
      },
      {
        timeout: 30000,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Get Gemini response
    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      console.error("Unexpected Gemini response:", response.data);

      return res.status(500).json({
        error: "Gemini returned an empty response",
      });
    }

    res.json({
      reply: reply,
    });

  } catch (error) {
    console.error(
      "API Error:",
      error.response?.data || error.message
    );

    res.status(500).json({
      error:
        error.response?.data?.error?.message ||
        "Failed to generate response",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});