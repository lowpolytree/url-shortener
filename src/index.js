const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017";
const client = new MongoClient(mongoUrl);

async function connectDb() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

connectDb();

app.get('/', (req, res) => {
  res.send('URL Shortener is running');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
