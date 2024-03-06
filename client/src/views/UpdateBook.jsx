import React from 'react'
import NavBar from '../components/NavBar';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import {getOneBook,updateOneBook} from "../services/BookService"

const UpdateBook = (props) => {
    //update a book need to get the book first
    //id is passed from useParams
    const { id } = useParams();
    // console.log("id", id);
    // //Form to take input so it needs state variables
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
    
    //need to populate the page with details of one book ----> Read One function
    //need axios.get() from the api
    const navigate = useNavigate();

    useEffect(() => {
        // axios.get(`http://localhost:9999/api/books/${id}`)
        getOneBook(id)
            .then((res) => {
                // console.log("res.data:",res.data);//res.data is an object
                console.log("res.data: ", res);
                //pre-populated data is in res.data
                const{title, author, page, isAvailable} = res;//destructure the res.data
                setBookState(res)
                console.log("bookState", bookState)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

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
    const submitHandler=(e)=>{
        e.preventDefault();
        // console.log("submit btn clicked",title, author, page, isAvailable);
        //put updated input to an object bc put method takes in an object with key value pairs which
        //should match the data type in DB(in client/models)
        // const updatedBook = {
        //     title:title,
        //     author:author,
        //     page:page,
        //     isAvailable:isAvailable
        // }
        //axios call post to server, second argument is the createdBook from input
        // 
        updateOneBook({...bookState, _id:id})
        .then((res)=>{
            console.log(res);
            //Once the book is added, direct back to display all books
            navigate('/');
        })
        .catch((error)=>{
            console.log(error);
            setErrors(error.response.data.errors);
        })
    }

    return (
        <>
            <NavBar navHead={bookState.title}/>
            <form onSubmit={submitHandler}>
                <label htmlFor="title">Title:</label>
                <br />
                <input type="text" name="title" id="title" value={bookState.title} onChange={changeHandler} />
                <br />
                {
                    errors.title&& <p className="error_msg">{errors.title.message}</p>
                }
                <label htmlFor="author">Author:</label>
                <br />
                <input type="text" name="author" id="author" value={bookState.author} onChange={changeHandler} />
                <br />
                {
                    errors.author&& <p className="error_msg">{errors.author.message}</p>
                }
                <label htmlFor="page">Page:</label>
                <br />
                <input type="text" name="page" id="page" value={bookState.page} onChange={changeHandler} />
                <br />
                {
                    errors.page&& <p className="error_msg">{errors.page.message}</p>
                }
                <label htmlFor="isAvailable">Is it Available:</label>
                <br />
                <input type="checkbox" name="isAvailable" id="isAvailable" checked={bookState.isAvailable} onChange={changeHandler} />
                <br />
                <button>Update</button>
            </form>
        </>

    )
}

export default UpdateBook