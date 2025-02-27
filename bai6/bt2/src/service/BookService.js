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

const addBook = async (books)=>{
    try{
        const result = await axios.post("http://localhost:8080/books",books);
        return result.data
    }catch(err){
        console.error("Error adding books:", err.message);
        return false;
    }
}

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