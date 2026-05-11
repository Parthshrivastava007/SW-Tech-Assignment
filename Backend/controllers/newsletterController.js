const Newsletter = require("../models/NewsLetter");

const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;
    const exists = await Newsletter.findOne({ email });
    if (exists)
      return res.status(400).json({ message: "You are already subscribed" });

    await Newsletter.create({ email });
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { subscribeNewsletter };
