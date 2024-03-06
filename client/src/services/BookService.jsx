import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:9999/api",
});

function getAllBook(){
    return http.get("/books")
    .then(res => res.data)
    .catch(err => {
        throw err;
    })
}
function getOneBook(id){
    return http.get(`/books/${id}`)
    .then(res => res.data)
    .catch(err => {
        throw err;
    })
}

function updateOneBook(book){
    return http.put(`/books/${book._id}`, book)
    .then(res => res.data)
    .catch(err =>{
        throw err;
    })
}
function createBook(book){
    return http.post(`/books`,book)
    .then(res => res.data)
    .catch(err =>{
        throw err;
    })
}

function deleteOneBook(id){
    return http.delete(`/books/${id}`)
    .then(res => res.data)
    .catch(err => {
        throw err;
    })
}


export {
    getAllBook,
    updateOneBook,
    getOneBook,
    deleteOneBook,
    createBook
};