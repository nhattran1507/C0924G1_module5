import React from "react";
import { Table, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function App() {
  const students = [
    {
      id: 1,
      name: "John Doe",
      address: "New York",
      point: 9,
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "California",
      point: 8.5,
    },
    {
      id: 3,
      name: "Michael Johnson",
      address: "Texas",
      point: 7.8,
    },
    {
      id: 4,
      name: "Emily Davis",
      address: "Florida",
      point: 9.2,
    },
    {
      id: 5,
      name: "Daniel Brown",
      address: "Illinois",
      point: 8.0,
    },
    {
      id: 6,
      name: "Sophia Wilson",
      address: "Washington",
      point: 9.5,
    },
    {
      id: 7,
      name: "James Anderson",
      address: "Nevada",
      point: 7.4,
    },
    {
      id: 8,
      name: "Olivia Martinez",
      address: "Arizona",
      point: 8.8,
    },
    {
      id: 9,
      name: "William Taylor",
      address: "Colorado",
      point: 7.9,
    },
    {
      id: 10,
      name: "Isabella Thomas",
      address: "Oregon",
      point: 8.6,
    }
  ];


  return (
      <Container className="mt-5">
        <h2 className="text-center mb-4">Danh sách học sinh</h2>
        <Table striped bordered hover>
          <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Điểm</th>
          </tr>
          </thead>
          <tbody>
          {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.address}</td>
                <td>{student.point}</td>
              </tr>
          ))}
          </tbody>
        </Table>
      </Container>
  );
}

export default App;
