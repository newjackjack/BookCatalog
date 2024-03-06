
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Home from './views/Home';
import ShowOneBook from './views/ShowOneBook';
import CreateBook from './views/CreateBook';
import UpdateBook from './views/UpdateBook';

function App() {
  return (
    <>
      <Routes>
      {/* Home page */}
      <Route path="/" element={<Home />} />
      {/* Route to showOneBook */}
      <Route path="/books/:id/details" element={<ShowOneBook />} />
      {/* Route to add a book */}
      <Route path="/create" element={<CreateBook />} />
      {/* Route to update a book */}
      <Route path="/books/:id/update" element= {<UpdateBook />} />
    </Routes>
    </>
  )
}

export default App
