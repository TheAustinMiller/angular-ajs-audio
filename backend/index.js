import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/api/search", async (req, res) => {
  const q = req.query.q;
  if (!q) return res.status(400).send("Query is required");

  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) return res.status(500).send("API key not configured");

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&maxResults=10&q=${encodeURIComponent(
    q
  )}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching from YouTube");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
