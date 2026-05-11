const Quote = require("../models/Quote");

const submitQuote = async (req, res) => {
  try {
    const quote = await Quote.create(req.body);
    res.status(201).json({ message: "Quote request submitted", quote });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { submitQuote };
