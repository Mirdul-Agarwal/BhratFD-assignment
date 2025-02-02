const mongoose = require("mongoose");

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  translations: {
    hi: { type: String },
    bn: { type: String },
  },
});

module.exports = mongoose.model("FAQ", FAQSchema);
