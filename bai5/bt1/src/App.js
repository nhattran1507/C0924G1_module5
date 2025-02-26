import './App.css';
import ContactForm from "./components/ContactForm";
import {ToastContainer} from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
      <div className="App">
        <ContactForm/>
        <ToastContainer/>
      </div>
  );
}

export default App;