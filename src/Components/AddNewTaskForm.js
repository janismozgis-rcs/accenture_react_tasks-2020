import Axios from 'axios';
import { useState } from 'react';

function AddNewTaskForm() {
    // internal state
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    // internal events
    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);

    const addNewTask = async () => {
        setLoading(true);
        setErrors([]);
        let errorsForForm = [];
        if (title === '') {
            errorsForForm.push('Please enrer a title');
        }

        if (errorsForForm.length > 0) {
            setErrors(errorsForForm);
            setLoading(false);
            return ;
        }

        try {
            const url = 'http://localhost:3001/tasks';
            await Axios.post(url, {
                title,
                description
            });
            setLoading(false);
            setTitle('');
            setDescription('');

        } catch(e) {
            alert('Something went wrong');
            setLoading(false);
        }
    };


    // template stuff
    const saveButtonText = loading ? 'Loading...' : 'Add task';
    let errorsElement = '';
    if (errors.length > 0) {
        errorsElement = (
            <div className="alert alert-danger">
                <ul>
                    {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
            </div>
        );
    }

    return (
        <div>
            {errorsElement}
            <div className="form-group">
                <label htmlFor="new-task-title">Title</label>
                <input value={title} onChange={handleTitleChange} disabled={loading} type="text" className="form-control" id="new-task-title"></input>
            </div>
            <div className="form-group">
                <label htmlFor="new-task-description">Description</label>
                <textarea value={description} onChange={handleDescriptionChange} disabled={loading} id="new-task-description" className="form-control"></textarea>
            </div>
            <div className="form-group">
                <button onClick={addNewTask} disabled={loading} className="btn btn-outline-success btn-inverse">{saveButtonText}</button>
            </div>
        </div>
    );
}

export default AddNewTaskForm;