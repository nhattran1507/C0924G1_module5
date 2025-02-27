import './App.css';
import ListBook from "./components/ListBook";
import AddBook from "./components/AddBook";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditBook from "./components/EditBook";
import {ToastContainer} from "react-toastify";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<ListBook />} />
              <Route path="/create" element={<AddBook />} />
              <Route path="/edit/:id" element={<EditBook />} />
            </Routes>
            <ToastContainer />
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;