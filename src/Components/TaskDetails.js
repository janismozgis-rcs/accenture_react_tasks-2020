import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function TaskDetails({id}) {
    const [task, setTask] = useState({
        loading: true,
        data: null,
    });

    useEffect(() => {
        loadTask();
    }, [id])

    const loadTask = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                setTask({
                    data: {
                        _id: 1,
                        title: 'some title',
                        description: 'some description',
                        comments: [
                            {id: 'a', comment: 'Foo', createdAt: 'Some date goes here'},
                            {id: 'b', comment: 'Bar', createdAt: 'Some date goes here'},
                        ]
                    },
                    loading: false,
                });
                resolve();
            }, 2000);
        });
    }

    const deleteComment = (id) => {
        const confirmed = window.confirm('Are you sure?');
        if (confirmed) {
            // delete stuff
        }
    }

    const deleteTask = () => {
        const confirmed = window.confirm('Are you sure?');
        if (confirmed) {
            // delete stuff
        }
    }

    let content = '';

    if (task.loading) {
        content = <h4>Loading...</h4>
    } else if(task.data) {
        let comments = '';
        if (task.data.comments.length > 0) {
            comments = task.data.comments.map((comment) => {
                return (
                    <div>
                        <strong>{comment.createdAt}</strong>
                        <button
                            className="btn btn-sm btn-danger float-right"
                            onClick={() => { deleteComment(comment.id) }}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <p>{comment.comment}</p>
                    </div>
                );
            })
        }

        content = (
            <div>
                <h5>Description:</h5>
                <button
                        className="btn btn-sm btn-danger float-right"
                        onClick={deleteTask}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                <p>
                    { task.data.description || 'No description provided' }
                </p>
                <h5>Comments</h5>
                <div>{comments}</div>
                <h5>Add comment</h5>
                <textarea className="form-control"></textarea>
                <button className="btn btn-primary mt-3">Add comment</button>
            </div>
        )
    } else {
        content = <h4>Task not found</h4>
    }

    
    return <div>{content}</div>
}

export default TaskDetails;