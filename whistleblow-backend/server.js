// server.js
const express = require('express');
const app = express();

// Define the port
const PORT = process.env.PORT || 5000;

// A basic route
app.get('/', (req, res) => {
  res.send('Welcome to Whistleblow Backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
