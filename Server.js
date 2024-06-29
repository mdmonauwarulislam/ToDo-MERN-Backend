const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const ToDoRoute = require('./routes/ToDoRoute');



const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.log('MongoDB connection error:', err));

app.use(ToDoRoute); 

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
