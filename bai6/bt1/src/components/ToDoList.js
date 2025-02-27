import{saveTodo,getAllToDos} from "../service/ToDoListService";
import {useEffect, useState} from "react";
import {Button, Col, Container, Form, ListGroup, Row} from "react-bootstrap";

const ToDoList=()=>{
    const [todos,setTodos]=useState([]);
    const [task,setTask]=useState("");

    useEffect(()=>{
        const fetchTodos = async ()=>{
            const data = await getAllToDos();
            setTodos(data);
        }
        fetchTodos();
    },[])

    const handleAddTodo = async (e) => {
        e.preventDefault();
        if (!task.trim()) {
            alert("Please enter a task!");
            return;
        }
        const newTodo = { task, completed: false };
        const result = await saveTodo(newTodo);
        if (result) {
            setTodos([...todos, result]);
            setTask("");
        } else {
            alert("Failed to add task.");
        }
    };

    return(
        <Container className="mt-4">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="text-center mb-4">Todo List</h1>
                    <Form onSubmit={handleAddTodo}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Enter the task"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Add
                        </Button>
                    </Form>
                    <ListGroup className="mt-4">
                        {todos.map((todo) => (
                            <ListGroup.Item key={todo.id}>
                                {todo.task}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default ToDoList