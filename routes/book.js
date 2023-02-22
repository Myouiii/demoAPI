const router = require('express').Router();

const bookController = require('../controllers/bookController')

// ADD BOOK   

router.post('/addbook', bookController.addBook);
// GET A BOOK
router.get('/getbook', bookController.getABook);
// GET ALL BOOK
router.get('/getall', bookController.getAllBook);
// UPDATE BOOK
router.put('/change', bookController.updateBook);
// GET ALL BOOK
router.delete('/delete', bookController.deleteBook);

module.exports = router;