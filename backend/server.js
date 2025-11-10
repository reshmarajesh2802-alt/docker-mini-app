const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {

      useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error(" MongoDB error:", err));

// Add a simple GET route for the root URL
app.get("/", (req, res) => {
  res.status(200).send("Backend server is running!");
});

// ... rest of your server.js code continues below ...


app.listen(5000, () => console.log(" Backend running on port 5000"));
