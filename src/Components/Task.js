import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import TaskDetails from './TaskDetails';

function Task({task}) {
    const [isTaskOpen, setIsTaskOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(task.isCompleted);

    const toggleIsOpen = () => {
        setIsTaskOpen(!isTaskOpen);
    }
    const toggleTaskChecked = () => {
        setIsChecked(!isChecked);
    }


    let buttonIcon = faAngleDown;
    let taskDetails = '';
    if (isTaskOpen) {
        buttonIcon = faAngleUp;
        taskDetails = <TaskDetails id={task._id} />
    }

    let title = task.title;
    if (isChecked) {
        title = <del>{task.title}</del>
    }

    return (
        <li className="list-group-item">
            <div className="form-check">
                <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id={`task-checkbox-${task._id}`} 
                    checked={isChecked}
                    onChange={toggleTaskChecked}
                />
                <label 
                    className="form-check-label" 
                    htmlFor={`task-checkbox-${task._id}`}
                >
                    {title}
                </label>
                <button className="btn btn-sm btn-primary float-right" onClick={toggleIsOpen}>
                    <FontAwesomeIcon icon={buttonIcon} />
                </button>
            </div>
            {taskDetails}
        </li>
    );
}

export default Task;