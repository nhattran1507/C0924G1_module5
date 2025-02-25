import { Component } from "react";
import Table from "react-bootstrap/Table";

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    id: 1,
                    name: "John",
                    age: 25,
                    address: "Hà Nội",
                },
                {
                    id: 2,
                    name: "Jane",
                    age: 22,
                    address: "Hồ Chí Minh",
                },
                {
                    id: 3,
                    name: "Jack",
                    age: 23,
                    address: "Đà Nẵng",
                },
            ],
        };
    }

    render() {
        return (
            <div className="container mt-5">
                <h1 className="text-center mb-4">Student List</h1>
                <Table striped bordered hover>
                    <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.students.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default StudentList;