import { Router } from "express";
import {createBook, readAll, getOneBook, updateOneBook, deleteOneBook} from "../controllers/book.controller.js";
const router = Router();
//------------------------- route without id -----------------------------//
router.route("/books")
    .get(readAll)
    .post(createBook);
//------------------------- route without id -----------------------------//

//--------------------------- route with id ------------------------------//

router.route("/books/:id")
    .get(getOneBook)
    .put(updateOneBook)
    .delete(deleteOneBook);
//--------------------------- route with id ------------------------------//
export default router;