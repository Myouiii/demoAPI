const router = require('express').Router();

const authorController = require('../controllers/authorController')

// ADD AUTHOR   

router.post('/', authorController.addAuthor);

// GET ALL AUTHOR

router.get('/', authorController.getAllAuthor);
module.exports = router;