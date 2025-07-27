import { useState } from 'react'
import './App.css'
import Name from './Name.jsx';
import TaskList from './TaskList.jsx';
import Task from './Task.jsx';
import Save from './Save.jsx';

function App() {
  const [listName, setListName] = useState('');
  const [taskContent, setTaskContent] = useState('');
  const [task, setTask] = useState([]);
  const [ID, setID] = useState(0);

  return (
      <div className="container">
        <div className='row'>
          <div className='col'>

          </div>
        </div>
        {/* Name der ToDo-Liste */}
        <div className="row justify-content-center">
          <div className="col-6">
            {/* Inhalt */}
            <Name listName={listName} setListName={setListName} />
          </div>
        </div>
        {/* ToDo-Liste und Tasks */}
        <div className="row justify-content-center">
          <div className="col-6">
            {/* Tasks */}
            <TaskList task={task} addTask={setTask} taskContent={taskContent} setTaskContent={setTaskContent} setID={setID} ID={ID} >
              <Task task={task} setTask={setTask} />
            </TaskList> 
          </div>
        </div>
        {/* Buttons */}
        <div className="row justify-content-center">
          {/* <div className='col'></div> */}
          <div className="col-6 mt-3 d-flex justify-content-end">
            {/* Inhalt */}
            <Save task={task} listName={listName} />
          </div>
        </div>
      </div>
  )
}


export default App
