import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import { Button, Col, Container, Form as BootstrapForm, Row } from "react-bootstrap";

const ContactForm = () => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .required("Email is required")
            .matches(emailRegex, "Invalid email address"),
        phone: Yup.string()
            .required("Phone is required")
            .matches(/^[0-9]+$/, "Phone must contain only numbers"),
    });

    const handleSubmit = (values, { resetForm }) => {
        toast.success("Form submitted!");
        console.log("Submitted values:", values);
        resetForm();
    };

    return (
        <Container className="my-5" style={{ maxWidth: "600px" }}>
            <h1 className="text-center mb-4 text-primary">Contact Us</h1>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form as={BootstrapForm}>
                        <Row className="mb-4">
                            <Col>
                                <BootstrapForm.Group>
                                    <BootstrapForm.Label htmlFor="name" className="fw-bold">
                                        Name
                                    </BootstrapForm.Label>
                                    <Field
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="text-danger mt-1"
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <BootstrapForm.Group>
                                    <BootstrapForm.Label htmlFor="email" className="fw-bold">
                                        Email
                                    </BootstrapForm.Label>
                                    <Field
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-danger mt-1"
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <BootstrapForm.Group>
                                    <BootstrapForm.Label htmlFor="phone" className="fw-bold">
                                        Phone
                                    </BootstrapForm.Label>
                                    <Field
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="phone"
                                        component="div"
                                        className="text-danger mt-1"
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <BootstrapForm.Group>
                                    <BootstrapForm.Label htmlFor="message" className="fw-bold">
                                        Message
                                    </BootstrapForm.Label>
                                    <Field
                                        as="textarea"
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="form-control"
                                    />
                                </BootstrapForm.Group>
                            </Col>
                        </Row>
                        <Button
                            type="submit"
                            variant="primary"
                            className="w-100 fw-bold"
                            style={{ padding: "10px" }}
                        >
                            Add Contact
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default ContactForm;