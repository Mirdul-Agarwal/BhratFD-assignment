const FAQ = require("../models/faq.model");
const redis = require("../config/redis");
const translateText = require("../middleware/translate");

exports.createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;

    // Translate text
    const hiTranslation = await translateText(question, "hi");
    const bnTranslation = await translateText(question, "bn");

    const newFAQ = new FAQ({
      question,
      answer,
      translations: { hi: hiTranslation, bn: bnTranslation },
    });

    await newFAQ.save();

    // Cache the new FAQ
    redis.set(`faq:${newFAQ._id}`, JSON.stringify(newFAQ));

    res.status(201).json(newFAQ);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getFAQs = async (req, res) => {
  try {
    const lang = req.query.lang || "en";

    // Check Redis cache
    const cachedFAQs = await redis.get(`faqs:${lang}`);
    if (cachedFAQs) {
      return res.json(JSON.parse(cachedFAQs));
    }

    let faqs = await FAQ.find();
    
    if (lang !== "en") {
      faqs = faqs.map((faq) => ({
        question: faq.translations[lang] || faq.question,
        answer: faq.answer,
      }));
    }

    // Cache results
    redis.set(`faqs:${lang}`, JSON.stringify(faqs), "EX", 3600);

    res.json(faqs);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
