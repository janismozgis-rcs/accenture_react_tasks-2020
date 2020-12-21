import Task from './Task';
import useAxiosGet from '../Hooks/useAxiosGet';

function Tasks() {
    const tasks = useAxiosGet('tasks');
    
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