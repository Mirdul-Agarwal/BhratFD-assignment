require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const faqRoutes = require("./routes/faq.routes");

connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", faqRoutes);

module.exports = app;
