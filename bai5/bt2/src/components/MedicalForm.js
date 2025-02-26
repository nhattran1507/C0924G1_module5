import * as Yup from "yup";
import {Form, Formik, Field, ErrorMessage} from "formik";
import {toast} from "react-toastify";

const MedicalForm = () => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required("Họ Tên là Bắt Buộc"),
        idNumber: Yup.string().required("Hộ Chiếu/CMND là Bắt buộc"),
        email: Yup.string()
            .required("Email là bắt buộc")
            .matches(emailRegex, "Email không đúng định dạng"),
        birthday: Yup.number()
            .typeError("Năm Sinh là Số")
            .required("Năm Sinh là Bắt buộc")
            .min(1990, "Phải Lớn Hơn năm 1990"),
        nationality: Yup.string().required("Quốc Tịch Là Bắt buộc"),
        province: Yup.string().required("Tỉnh/Thành phố là bắt buộc"),
        district: Yup.string().required("Quận/Huyện là bắt buộc"),
        commune: Yup.string().required("Phường/Xã là bắt buộc"),
        phone: Yup.string()
            .required("Số điện thoại là bắt buộc")
            .matches(/^[0-9]+$/, "Số điện thoại phải là số"),
        address: Yup.string().required("Địa Chỉ Là Bắt buộc"),
    });

    const handleSubmit = (values, {resetForm}) => {
        toast.success("Submit Thành Công");
        console.log("SubmitData:", values);
        resetForm();
    };

    return (
        <>
            <Formik
                initialValues={{
                    fullName: "",
                    idNumber: "",
                    birthday: "",
                    gender: "",
                    nationality: "",
                    company: "",
                    department: "",
                    healthInsurance: false,
                    province: "",
                    district: "",
                    commune: "",
                    address: "",
                    phone: "",
                    email: "",
                    travelHistory: "",
                    symptoms: [],
                    contactHistory: [],
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({values}) => (
                    <Form className="container mt-4 p-4 shadow rounded bg-light">
                        <h1>Tờ Khai Y Tế</h1>
                        <div className="mb-3">
                            <label htmlFor="fullName">Họ Tên</label>
                            <Field id="fullName" name="fullName" className="form-control"/>
                            <ErrorMessage name="fullName" component="div" className="text-danger"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="idNumber">Hộ Chiếu/CMND</label>
                            <Field id="idNumber" name="idNumber" className="form-control"/>
                            <ErrorMessage name="idNumber" component="div" className="text-danger"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="birthday">Năm Sinh</label>
                            <Field id="birthday" name="birthday" className="form-control"/>
                            <ErrorMessage name="birthday" component="div" className="text-danger"/>
                        </div>
                        <div className="mb-3">
                            <label>Giới tính</label>
                            <div>
                                <Field type="radio" name="gender" value="Nam"/> Nam
                                <Field type="radio" name="gender" value="Nữ" className="ms-3"/> Nữ
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nationality">Quốc Tịch</label>
                            <Field id="nationality" name="nationality" className="form-control"/>
                            <ErrorMessage name="nationality" component="div" className="text-danger"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="company">Công ty làm việc</label>
                            <Field id="company" name="company" className="form-control"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="department">Bộ phận làm việc</label>
                            <Field id="department" name="department" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label>
                                <Field type="checkbox" name="healthInsurance"/> Có thẻ bảo hiểm y tế
                            </label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="province">Tỉnh/Thành phố</label>
                            <Field id="province" name="province" className="form-control"/>
                            <ErrorMessage name="province" component="div" className="text-danger"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="district">Quận/Huyện</label>
                            <Field id="district" name="district" className="form-control"/>
                            <ErrorMessage name="district" component="div" className="text-danger"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="commune">Phường/Xã</label>
                            <Field id="commune" name="commune" className="form-control"/>
                            <ErrorMessage name="commune" component="div" className="text-danger"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">Địa Chỉ</label>
                            <Field id="address" name="address" className="form-control"/>
                            <ErrorMessage name="address" component="div" className="text-danger"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone">Số Điện Thoại</label>
                            <Field id="phone" name="phone" className="form-control"/>
                            <ErrorMessage name="phone" component="div" className="text-danger"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" className="form-control"/>
                            <ErrorMessage name="email" component="div" className="text-danger"/>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="travelHistory">Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng lãnh thổ
                                nào?</label>
                            <Field
                                as="textarea"
                                id="travelHistory"
                                name="travelHistory"
                                rows="3"
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label>Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không?</label>
                            <div>
                                <Field type="checkbox" name="symptoms" value="Sốt"/> Sốt
                                <Field type="checkbox" name="symptoms" value="Ho" className="ms-3"/> Ho
                                <Field type="checkbox" name="symptoms" value="Khó thở" className="ms-3"/> Khó thở
                                <Field type="checkbox" name="symptoms" value="Viêm phổi" className="ms-3"/> Viêm phổi
                                <Field type="checkbox" name="symptoms" value="Đau họng" className="ms-3"/> Đau họng
                                <Field type="checkbox" name="symptoms" value="Mệt mỏi" className="ms-3"/> Mệt mỏi
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với?</label>
                            <div>
                                <Field type="checkbox" name="contactHistory" value="Người bệnh COVID-19"/> Người bệnh
                                COVID-19
                                <Field
                                    type="checkbox"
                                    name="contactHistory"
                                    value="Người từ nước có bệnh COVID-19"
                                    className="ms-3"
                                />{" "}
                                Người từ nước có bệnh COVID-19
                                <Field
                                    type="checkbox"
                                    name="contactHistory"
                                    value="Người có biểu hiện (sốt, ho, khó thở, viêm phổi)"
                                    className="ms-3"
                                />{" "}
                                Người có biểu hiện (sốt, ho, khó thở, viêm phổi)
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default MedicalForm;