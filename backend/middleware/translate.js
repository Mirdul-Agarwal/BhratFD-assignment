const axios = require("axios");

const translateText = async (text, targetLang) => {
  try {
    const response = await axios.get(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURI(text)}`
    );
    return response.data[0][0][0]; // Extract translated text
  } catch (error) {
    console.error("Translation Error:", error);
    return text; // Fallback to original text
  }
};

module.exports = translateText;
