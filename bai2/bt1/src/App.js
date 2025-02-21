import React from "react";
import { Table, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function App() {
    const students = [
        {
            company: "Alfreds Futterkiste",
            contact: "Maria Anders",
            country: "Germany"
        },
        {
            company: "Centro comercial Moctezuma",
            contact: "Francisco Chang",
            country: "Mexico"
        },
        {
            company: "Ernst Handel",
            contact: "Roland Mendel",
            country: "Austria"
        },
        {
            company: "Island Trading",
            contact: "Helen Bennett",
            country: "UK"
        },
        {
            company: "Laughing Bacchus Winecellars",
            contact: "Yoshi Tannamuri",
            country: "Canada"
        },
        {
            company: "Magazzini Alimentari Riuniti",
            contact: "Giovanni Rovelli",
            country: "Italy"
        }
    ];

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Danh sách sinh viên</h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student, index) => (
                    <tr key={index}>
                        <td>{student.company}</td>
                        <td>{student.contact}</td>
                        <td>{student.country}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default App;
