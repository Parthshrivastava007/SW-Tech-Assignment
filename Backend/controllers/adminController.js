const User = require("../models/User");
const Contacts = require("../models/Contacts");
const Quote = require("../models/Quote");

const getContacts = async (req, res) =>
  res.json(await Contacts.find().sort({ createdAt: -1 }));
const getUsers = async (req, res) =>
  res.json(await User.find().select("-password"));
const getQuotes = async (req, res) =>
  res.json(await Quote.find().sort({ createdAt: -1 }));

const deleteContact = async (req, res) => {
  await Contacts.findByIdAndDelete(req.params.id);
  res.json({ message: "Submission deleted" });
};

module.exports = { getContacts, getUsers, getQuotes, deleteContact };
