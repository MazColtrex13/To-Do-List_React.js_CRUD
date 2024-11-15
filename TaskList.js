import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <Card key={index} className="mb-3 shadow-sm task-card">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className={`task-name ${task.status.replace(" ", "-").toLowerCase()}`}>
                                {task.name}
                            </h5>
                            <div>
                                <span className={`badge ${task.priority.toLowerCase()}-priority`}>
                                    {task.priority}
                                </span>{' '}
                                <span className="badge bg-secondary text-white">
                                    {task.status}
                                </span>
                            </div>
                        </div>
                        <div>
                            <Button
                                variant="outline-primary"
                                onClick={() => showEditForm(task)}
                                className="me-2"
                            >
                                <PencilSquare />
                            </Button>
                            <Button
                                variant="outline-danger"
                                onClick={() => deleteTask(task.id)}
                            >
                                <Trash />
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default TaskList;

