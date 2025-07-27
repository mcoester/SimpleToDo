function TaskList({ taskContent, setTaskContent, children, addTask, setID, ID, task }) {
const handleAddTask = () => {
    addTask(prev => [...prev, [ID, taskContent, false]]);
    // console.log(task);
    setID(prev => prev + 1);
    // console.log(ID);
    setTaskContent('');
}

    return (
        <ul className="list-group">
            {children}
            <li className="list-group-item">
                <div className='row'>
                    <div className='col-8'>
                        <input value={taskContent} onChange={({ target }) =>{
                            setTaskContent(target.value);
                        }} type="text" className="form-control" placeholder="New task" aria-label="new task"/>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                        <button type="button" className="btn btn-outline-success btn-size" onClick={handleAddTask} >+</button>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default TaskList;