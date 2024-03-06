import React from 'react'
import NavBar from '../components/NavBar';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import {getOneBook, deleteOneBook} from "../services/BookService"

const ShowOneBook = (props) => {
    //create a state variable to 
    const [oneBook, setOneBook] = useState(null);
    //id is passed from useParams
    const { id } = useParams();
    console.log("id", id);
    //need to populate the page with details of one book ----> Read One function
    //need axios.get() from the api

    //useNavigate to redirect navigate
    const navigate = useNavigate();

    //Read one book 
    useEffect(() => {
        // axios.get(`http://localhost:9999/api/books/${id}`)
        getOneBook(id)
            .then((res) => {
                console.log(res);//res.data is an object
                setOneBook(res);//setOneBook state to res.data
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])
    //From the requirement, the borrow button should delete
    const handleBorrow = (e,deleteId) => {
        e.preventDefault();
        // axios.delete(`http://localhost:9999/api/books/${id}`)
        deleteOneBook(id)
            .then((res) => {
                console.log("response from delete:", res);
                // const filtedBook = books.filter((eachBook)=>{
                //     return eachBook._id !== deleteId
                // })
                // setOneBook(null);
                navigate('/');
            })
            .catch((error) => {
                console.log("Loading......",error);
            })
    }
    if( !oneBook ){
        return <h1>Book Catalog</h1>
    }
    return (
        <>
            <NavBar navHead={oneBook.title}/>
            <div>
                {/* {JSON.stringify(oneBook)} */}
                {
                    oneBook ? (
                        <div>
                            <h3>{oneBook.title}</h3>
                            <br />
                            <p>by: {oneBook.author}</p>
                            <br />
                            <p>Page count: {oneBook.page}</p>
                            <br />
                            {
                                oneBook.isAvailable ? (
                                    <>
                                        <p style={{ color: "green" }}>Available for borrowing</p>
                                        <button onClick={handleBorrow}>Borrow</button>
                                    </>
                                ) : (
                                    <>
                                        <p style={{ color: "red" }}>Not available for borrowing</p>
                                    </>
                                )
                            }
                        </div>
                    ) : (
                        <div>
                        </div>
                    )
                }
            </div>
        </>

    )
}

export default ShowOneBook