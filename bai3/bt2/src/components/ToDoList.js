import {Component} from "react";
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

class DoToList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            items:''
        };
        this.counter=1;
    }

    handleChange = (e) => {
        this.setState({items: e.target.value});
    }

    handeAddItem = () => {
        const { items,list } = this.state;
        if (items !== '') {
            const newTask = {
                id: this.counter++,
                name: items
            };

            this.setState({
                list: [...list, newTask],
                item: ''
            });
        }
    }

    render() {
        const {list,items} = this.state;
        return (
            <Container style={{ marginTop: '50px', textAlign: 'center' }}>
                <Row>
                    <Col>
                        <h1>Todo List</h1>
                        <Form>
                            <Form.Group controlId="taskInput">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter a task"
                                    value={items}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                onClick={this.handeAddItem}
                                style={{ marginTop: '10px' }}
                            >
                                Add
                            </Button>
                        </Form>
                        <ListGroup style={{ marginTop: '20px' }}>
                            {list.map((todo) => (
                                <ListGroup.Item key={todo.id}>{todo.name}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DoToList;