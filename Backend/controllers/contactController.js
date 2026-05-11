const Contacts = require("../models/Contacts");

const submitContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const contact = await Contacts.create({
      name,
      email,
      phone,
      subject,
      message,
    });
    res.status(201).json({ message: "Message Sent Sucessfully", contact });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { submitContact };
