import { useState, useEffect } from 'react';
import Task from './Task';

function Tasks() {
    const [tasks, setTasks] = useState({
        data: [],
        loading: true
    });
    const foo = '123';

    const loadTasks = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                setTasks({
                    data: [
                        {_id: '1', title: 'Buy milk', isCompleted: false},
                        {_id: '2', title: 'Learn react', isCompleted: false},
                        {_id: '3', title: 'Be awesome', isCompleted: true},
                    ],
                    loading: false,
                });
                resolve();
            }, 2000);
        });
    }

    useEffect(() => {
        loadTasks();
    }, [foo]);
    
    let content = '';
    if (tasks.loading) {
        content = <h4>Loading...</h4>
    } else if (tasks.data.length == 0) {
        content = <h4>No tasks to do! yay!</h4>
    } else {
        content = (
            <ul className="list-group">
                {tasks.data.map((task) => <Task key={task._id} task={task} />)}
            </ul>
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default Tasks;