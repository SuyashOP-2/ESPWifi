const express = require("express");
const app = express();
const port = process.env.PORT || 1001; // Use the PORT environment variable or default to 1001

require("dotenv").config(); // Load environment variables from the .env file

app.get("/validateRfid", (req, res) => {
  const { id } = req.query;
  console.log(req.query);
  if (id == "Adi") {
    return res.json({ isValid: true });
  }
  return res.json({ isValid: false });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
