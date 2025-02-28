import axios from "axios";

const getUser= async ()=>{
    try{
        const result = await axios.get("http://localhost:8080/user")
        return result.data;
    }
    catch(error){
        console.error("Error fetching data: ", error);
        return [];
    }
}

const deleteUser= async (id)=>{
    try{
        const result = await axios.delete(`http://localhost:8080/user/${id}`)
        console.log("Book deleted successfully");
        return result.data;
    }
    catch(error){
        console.error("Error deleting book: ", error);
    }
}

export{getUser, deleteUser}