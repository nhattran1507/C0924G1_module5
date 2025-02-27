import axios from "axios";

const getBook= async ()=>{
    try{
        const result = await axios.get("http://localhost:8080/books")
        return result.data
    }
    catch(err){
        console.error("Error fetching books:", err.message);
        return[];
    }
}

const addBook = async (books) => {
    try {
        console.log("Sending request to API:", books);
        const result = await axios.post("http://localhost:8080/books", books);
        console.log("Response from API:", result.data);
        return result.data;
    } catch (err) {
        if (err.response) {
            console.error("API Error:", err.response.data);
            console.error("Status Code:", err.response.status);
        } else {
            console.error("Network Error:", err.message);
        }
        return false;
    }
};

const updateBook = async (id,books)=>{
    try{
        const result = await axios.put(`http://localhost:8080/books/${id}`,books);
        return result.data
    }catch (err){
        console.error("Error adding books:", err.message);
        return false;
    }
}
const deleteBook = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:8080/books/${id}`);
        return result.data;
    } catch (err) {
        console.error("Error deleting book:", err.message);
        return false;
    }
};

export {getBook,addBook,updateBook,deleteBook}