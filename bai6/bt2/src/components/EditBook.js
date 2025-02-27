import * as Yup from "yup";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getBook, updateBook} from "../service/BookService";
import {ErrorMessage, Field, Formik} from "formik";
import {toast} from "react-toastify";

const EditBook = ()=>{
    const {id}=useParams();
    const navigate = useNavigate();
    const [initialValue, setInitialValue] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const books = await getBook();
            console.log("Books fetched:", books);
            const foundBook = books.find((b) => b.id === id);
            console.log("Found book:", foundBook);
            if (foundBook) {
                setInitialValue({
                    title: foundBook.title,
                    quantity: foundBook.quantity,
                });
            } else {
                console.log("Book not found with ID:", id);
                navigate("/");
            }
        };
        fetchData();
    }, [id, navigate]);

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required("Title is required")
            .min(5, "Title Must be at least 5 characters"),
        quantity: Yup.number().required("Quantity is required")
            .min(1, "Quantity must be at least 1 characters")
            .integer("Quantity must be an integer"),
    })

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            console.log("Submitting values:", values);
            const result = await updateBook(id, values);
            console.log("API Response in handleSubmit:", result);
            if (result) {
                toast.success("Update Success",result);
                navigate("/");
            } else {
                toast.error("Update Failed", result);
            }
        } catch (err) {
            console.error("Error during update:", err.message);
        } finally {
            setSubmitting(false);
        }
    };
    if(!initialValue) return <div>Loading...</div>;
    return(
        <>
            <h1>Edit Book</h1>
            <Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={validationSchema}>
                {({ isSubmitting, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Title:</label>
                            <Field type="text" name="title" placeholder="Enter book title" />
                            <ErrorMessage name="title" component="div" style={{ color: "red" }} />
                        </div>
                        <div>
                            <label>Quantity:</label>
                            <Field type="number" name="quantity" placeholder="Enter quantity" />
                            <ErrorMessage name="quantity" component="div" style={{ color: "red" }} />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Updating..." : "Update Book"}
                        </button>
                    </form>
                )}
            </Formik>

            <NavLink to="/">Quay Lại Trang Home</NavLink>
        </>
    )
}

export default EditBook;