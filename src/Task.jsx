function Task({ task, setTask }) {
    const handleCheck = (id) =>{
        setTask(prev => {
            return prev.map(item =>{
            if(item[0] === id){
                return [item[0], item[1], !item[2]];
            } else{
                return item;
            }
        })});
    }

    const handleDelete = id =>{
        setTask(prev =>{
            return prev.filter(item => item[0] !== id);
        });
    }

    {if(task.length === 0){
        return <></>
    } else {
    return(
        task.map(taskItem =>{
            // console.log(taskItem[2]);
            return(
                <li className="list-group-item">
                    <div className='row justify-content-start align-items-center'>
                        <div className='col-8'>    
                            {taskItem[2] ? <p className="w-100 text-center text-decoration-line-through">{taskItem[1]}</p> : 
                            <p className="text-center w-100" >{taskItem[1]}</p>}
                        </div>
                        <div className='col-2 d-flex justify-content-end'>
                            <button onClick={() =>{
                                handleDelete(taskItem[0]);
                            }} type="button" className="btn btn-outline-danger btn-size">-</button>
                            {/* <img className='img-fluid' src='./notDone.png'></img> */}
                        </div>
                        <div className='col-2'>
                            <input onClick={() =>{
                                handleCheck(taskItem[0]);
                            }} className="form-check-input" type="checkbox" value="" id="checkDefault"/>                                   
                        </div>
                    </div>
                </li>
            );
        })
    )
    }
    }
}

export default Task;