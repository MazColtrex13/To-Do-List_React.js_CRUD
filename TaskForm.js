import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const TaskForm = ({ show, handleClose, addTask, editTask, taskToEdit }) => {
    const [task, setTask] = useState({ name: '', priority: 'Medium', status: 'To Do' });

    useEffect(() => {
        if (taskToEdit) {
            setTask(taskToEdit);
        }
    }, [taskToEdit]);

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        taskToEdit ? editTask(task) : addTask(task);
        setTask({ name: '', priority: 'Medium', status: 'To Do' });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{taskToEdit ? 'Edit Task' : 'Add New Task'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="taskName">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter task name"
                            value={task.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="taskPriority" className="mt-3">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control as="select" name="priority" value={task.priority} onChange={handleChange}>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="taskStatus" className="mt-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" name="status" value={task.status} onChange={handleChange}>
                            <option>To Do</option>
                            <option>In Progress</option>
                            <option>Done</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {taskToEdit ? 'Update Task' : 'Add Task'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TaskForm;
