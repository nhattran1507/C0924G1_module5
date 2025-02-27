import {useEffect, useState} from "react";
import {deleteBook, getBook} from "../service/BookService";
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";

const ListBook=()=>{
    const [book,setBook]=useState([])
    useEffect(()=>{
        const fetchBook= async ()=>{
            const bookData = await getBook();
            setBook(bookData);
        }
        fetchBook()
    },[])

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this book?");
        if (confirmDelete) {
            const success = await deleteBook(id);
            if (success) {
                setBook(book.filter((b) => b.id !== id));
                toast.success("Deleted book successfully")
            } else {
                alert("Failed to delete the book");
            }
        }
    };
    return (
        <>
            <h1>Book Management</h1>
            <NavLink to="/create">Thêm mới</NavLink>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {book.map((book,index)=>(
                    <tr key={book.id}>
                        <td>{index+1}</td>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td><NavLink to={`/edit/${book.id}`}>Edit</NavLink></td>
                        <td>
                            <button onClick={() => handleDelete(book.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default ListBook;