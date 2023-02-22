const { Author, Book } = require('../model/model');

const bookController = {
    // ADD BOOK
    addBook: async (req, res, next) => {
        try {

            const newBook = new Book(req.body);

            const savedBook = await newBook.save();
            if (req.body.author) {
                //const author = Author.find({_id: req.body.author});
                const author = Author.findById(req.body.author);
                await author.updateOne({ $push: { books: savedBook._id } });
            }
            res.status(200).json(savedBook);
            res.end();
            // doesn't call next()
            //next();
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }

    },
    // GET A BOOK
    getABook: async (req, res) => {
        try {
            const book = await Book.findById(req.query.id);
            res.status(200).json(book);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    // GET ALL AUTHOR
    getAllBook: async (req, res) => {
        try {
            const books = await Book.find();
            res.status(200).json(books);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    // DELETE A BOOK 
    deleteBook: async (req, res) => {
        try {

            const book = await Book.deleteOne({_id : req.query.id})
                .then(() => res.status(200).json('Xoá thành công'))
                .catch(err => res.status(500).json('Xoá thất bại'))
        } catch (err) {
            res.status(500).json("Không xoá được");

        }
    },
    // PUT A BOOK
    updateBook: async (req, res) => {
        try {
            console.log(req.body);
            const book = await Book.updateOne({_id: req.query.id}, req.body);
            res.status(200).json("Sửa thành công")
        } catch (err) {
            res.status(500).json("Không sửa được");

        }
    },
}


module.exports = bookController;