import React from 'react'
import NavBar from '../components/NavBar';
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import {createBook} from "../services/BookService"

const CreateBook = (props) => {
//--------------------------------------------------- State Variables --------------------------------------------//
    //Form to take input so it needs state variables
    // const [title, setTitle] = useState("");
    // const [author, setAuthor] = useState("");
    // const [page, setPage] = useState(1);
    // const [isAvailable, setIsAvailable] = useState(true);
    //------------------------------------------------ Single State -----------------------------------------------//
    const [bookState, setBookState] = useState({
        title: "",
        author:"",
        page: 0,
        isAvailable: true
    })
    // a state variable to handle  errors
    const [errors, setErrors] = useState("")
//--------------------------------------------------- State Variables ----------------------------------------------//
//--------------------------------------------------- useState Variable --------------------------------------------//
    const navigate = useNavigate();
//--------------------------------------------------- useState Variable --------------------------------------------//
//--------------------------------------------------- submitHandler ------------------------------------------------//
    //changeHandler
    const changeHandler = (e)=>{
        let newValue;
        if(e.target.type === "checkbox"){
            newValue = e.target.checked;
        }
        else{
            newValue = e.target.value;
        }
        setBookState((prevState)=>({
            ...prevState,
            [e.target.name]: newValue 
        }));
    }
    //submitHandler handles the input and send to server(a post request)
    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(title, author, page, isAvailable);
        const createdBook = {
            title: bookState.title,
            author: bookState.author,
            page: bookState.page,
            isAvailable: bookState.isAvailable
        }
        //axios call post to server, second argument is the createdBook from input
        // axios.post("http://localhost:9999/api/books", createdBook)
        createBook(createdBook)
            .then((res) => {
                console.log(res);
                //Once the book is added, direct back to display all books("/")
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                //The validations will be back in error.response.data.errors
                //errors are defined in the model file from server
                setErrors(error.response.data.errors);
            })
    }

    
//--------------------------------------------------- submitHandler ------------------------------------------------//
    // const NavHead = {navHead: "Add a book"};


    return (
        <>
            <NavBar navHead={"Add a book"}/>
            <br />
            <form onSubmit={submitHandler}>
                <label htmlFor="title">Title:</label>
                <br />
                <input type="text" name="title" id="title" value={bookState.title} onChange={changeHandler} />
                <br />
                {
                    errors.title && <p className="error_msg">{errors.title.message}</p>
                }
                <label htmlFor="author">Author:</label>
                <br />
                <input type="text" name="author" id="author" value={bookState.author} onChange={changeHandler} />
                <br />
                {
                    errors.author && <p className="error_msg">{errors.author.message}</p>
                }
                <label htmlFor="page">Page:</label>
                <br />
                <input type="text" name="page" id="page" value={bookState.page} onChange={changeHandler} />
                <br />
                {
                    errors.page && <p className="error_msg">{errors.page.message}</p>
                }
                <label htmlFor="isAvailable">Is it Available:</label>
                <br />
                <input type="checkbox" name="isAvailable" id="isAvailable" checked={bookState.isAvailable} onChange={changeHandler} />
                <br />
                <button>Add Book!</button>
            </form>
        </>

    )
}

export default CreateBook