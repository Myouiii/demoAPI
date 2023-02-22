const {Author, Book} = require('../model/model');

const authorController = {
    // ADD AUTHOR
    addAuthor: async(req, res, next) =>{
        try{
            
            const newAuthor = new Author(req.body);
            const saveAuthor = await newAuthor.save();
            res.status(200).json(saveAuthor);
            res.end();
            // doesn't call next()
            //next();
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }  
        
    },
    // GET ALL AUTHOR
    getAllAuthor: async(req, res) => {
        try{
            const authors = await Author.find();
            res.status(200).json(authors);

        }catch(err){
            res.status(500).json(err);
        }
    }
}


module.exports = authorController;