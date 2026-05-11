const express = require('express');
const router = express.Router();
const { getContacts, getUsers, getQuotes, deleteContact } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

router.use(protect);
router.use(admin);

router.get('/contacts', getContacts);
router.delete('/contacts/:id', deleteContact);
router.get('/users', getUsers);
router.get('/quotes', getQuotes);

module.exports = router;
