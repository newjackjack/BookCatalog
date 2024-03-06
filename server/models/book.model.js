import {model, Schema} from 'mongoose';

const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Book title is required!"],
            minlength: [2, "Book title must be at least 2 characters long!"],
            maxlength: [255, "Book title must be less than 255 characters long"]
        },
        author: {
            type: String,
            required: [true, "Book's author is required!"],
            minlength: [5, "Book's author must be at least 5 characters long!"],
            maxlength: [255, "Book's author must be less than 255 characters long"]
        },
        page: {
            type: Number,
            required: [true, "Page is required!"],
            min: [1, "Page must be at least 1 page!"]
        },
        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Book = model("Book", BookSchema);
export default Book;
/**
1. title: required with a custom message, minimum length of 2 with a custom message, maximum length of 255 with a custom message.  (checked)
2. author: required with a custom message, minimum length of 5 with a custom message, maximum length of 255 with a custom message. (checked)
3. pages: required with a custom message, minimum length of 1 with a custom message.                                               (checked)
4. isAvailable: default of false.                                                                                                  (checked)
5. The schema should also have timestamps.                                                                                         (checked)
 */