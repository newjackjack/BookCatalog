//----------------------------------------------- CONTROLLER IS FOR CRUD ----------------------------------------------------//
import Book from '../models/book.model.js';


// Create new
async function createBook(req, res) {
    try {
        const newBook = await Book.create(req.body);
        res.json(newBook);
    } catch (error) {
        console.log("Server Controller Error -> CreateNew error:", error);
        res.status(400).json(error);
    }
}
// READ ALL
async function readAll(req, res) {
    try {
        const allOfTheBook = await Book.find(); // []
        res.json(allOfTheBook);
    } catch (error) {
        console.log("Server Controller Error -> READALL error:", error);
        res.status(400).json(error);
    }
}
// READ ONE
async function getOneBook(req, res) {
    try {
        const foundBook = await Book.findById(req.params.id);
        res.json(foundBook);
    } catch (error) {
        console.log("Server Controller Error -> READONE error:", error);
        res.status(400).json(error);
    }
}
// UPDATE
async function updateOneBook(req, res) {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, });
        res.json(updatedBook);
    } catch (error) {
        console.log("Server Controller Error -> UPDATE error:", error);
        res.status(400).json(error);
    }
}
// DELETE
async function deleteOneBook(req, res) {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.json(deletedBook);
    } catch (error) {
        console.log("Server Controller Error -> DELETE error:", error);
        res.status(400).json(error);
    }
}

export {
    createBook,
    readAll,
    getOneBook,
    updateOneBook,
    deleteOneBook
};