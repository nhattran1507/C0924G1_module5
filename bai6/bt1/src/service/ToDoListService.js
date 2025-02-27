import axios from "axios";

const getAllToDos = async ()=>{
    try{
        const response = await axios.get("http://localhost:8080/todos");
        return response.data;

    }catch (error){
        return [];
    }
}

const saveTodo = async (todos)=>{
    try{
        const response = await axios.post("http://localhost:8080/todos",todos);
        return response.data;
    }
    catch (error){
        return [];
    }
}

export {getAllToDos,saveTodo}