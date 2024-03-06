import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar';
import axios from "axios";
import { Link } from "react-router-dom";
import {getAllBook, updateOneBook} from "../services/BookService"


const Home = (props) => {
    // a state variable to stores an array of all the books fter the axios get request
    const [books, setBooks] = useState([]);
    // Display all data gotten from api
    // Need to send the request as soon as the component renders, useEffect is helpful here
    useEffect(() => {
        // axios.get("http://localhost:9999/api/books")
        getAllBook()
            .then((res) => {
                //console.log to see the form of results from api call
                console.log("res.data: ", res);
                //results come back from the axios request is in res.data, setBooks(res.data) to books
                setBooks(res);
                //books are now an array of book objects
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    const defaultHead = { title: "Book Catalog" };

    //if delete btn is on the default page
    // const deleteHandler = (idForDeletion) => {
    //     axios.delete(`http://localhost:8000/api/people/delete/${idForDeletion}`)
    //         .then((res) => (
    //             console.log(res.data)
    //             let filteredList = poopieList.tiiter((person, index) => {
    //                 person._id !== idForDeletion
    //             })
    //             setPeople(filteredList)
    //     })
    // }


return (
    <>
        <NavBar navHead={"Book Catalog"}/>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Title: </td>
                        <td>Author: </td>
                        <td>Page count: </td>
                        <td>Available: </td>
                        <td>Book Page: </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book) => {
                            return <tr key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.page}</td>
                                <td>{book.isAvailable ? "Yes" : "No"} | <Link to={`/books/${book._id}/update`}>Edit</Link></td>
                                <td><Link to={`/books/${book._id}/details`}>Book details</Link></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
)
}

export default Home