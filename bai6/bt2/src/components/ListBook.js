import { useEffect, useState } from "react";
import { deleteBook, getBook } from "../service/BookService";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "bootstrap";

const ListBook = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const bookData = await getBook();
            setBooks(bookData);
        };
        fetchBooks();
    }, []);

    const openModal = (book) => {
        setSelectedBook(book);
        const modalElement = document.getElementById("confirmDeleteModal");
        if (modalElement) {
            const modal = new Modal(modalElement);
            modal.show();
        } else {
            console.error("Modal element not found!");
        }
    };

    const handleDelete = async () => {
        if (selectedBook) {
            const success = await deleteBook(selectedBook.id);
            if (success) {
                setBooks(books.filter((b) => b.id !== selectedBook.id));
                toast.success("Deleted book successfully");
            } else {
                toast.error("Failed to delete the book");
            }
            setSelectedBook(null);
        }
    };

    return (
        <>
            <h1>Quản lý sách</h1>
            <NavLink to="/create" className="btn btn-primary mb-3">Thêm mới</NavLink>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tiêu đề</th>
                    <th>Số Lượng</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book, index) => (
                    <tr key={book.id}>
                        <td>{index + 1}</td>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <NavLink to={`/edit/${book.id}`} className="btn btn-warning me-2">Sửa</NavLink>
                            <button className="btn btn-danger" onClick={() => openModal(book)}>Xóa</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="modal fade" id="confirmDeleteModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirm Delete</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {selectedBook && (
                                <p>Are you sure you want to delete <strong>{selectedBook.title}</strong>?</p>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={handleDelete} data-bs-dismiss="modal">Yes, Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListBook;
