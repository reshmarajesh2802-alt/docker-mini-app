const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); //temporary test commit

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {

  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error(" MongoDB error:", err));
app.use(cors({
  origin: "https://docker-mini-backend-jmvp.onrender.com",
}));

// Add a simple GET route for the root URL
app.get("/", (req, res) => {
  res.json({message: "Hello from Backend"});
});

// ... rest of your server.js code continues below ...


const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
