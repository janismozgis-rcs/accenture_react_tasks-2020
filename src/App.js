import AddNewTaskForm from "./Components/AddNewTaskForm";
import Tasks from "./Components/Tasks";

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Todo list</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Tasks />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3>Add new task</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <AddNewTaskForm />
                </div>
            </div>
        </div>
    );
}

export default App;
