import { useState, useEffect } from 'react'
import './App.css'
import Name from './Name.jsx';
import TaskList from './TaskList.jsx';
import Task from './Task.jsx';
import Save from './Save.jsx';
import Navbar from './NavBar.jsx';
import Clear from './Clear.jsx';

function App() {
  const [title, setTitle] = useState('');
  const [listName, setListName] = useState('');
  const [taskContent, setTaskContent] = useState('');
  const [task, setTask] = useState([]);
  const [ID, setID] = useState(0);
  const [allLists, setAllLists] = useState([]);
  const [saveIndex, setSaveIndex] = useState(0);
  const [allTasks, setAllTasks] = useState([]);
  // const [isClosed, setIsClosed] = useState(true);

  useEffect(() => {
    // console.log(allLists);
    const list = []
    const taskList = [];
    for(let i = 0; i < 5; i++){
      const jsonData = localStorage.getItem(i);
      // console.log(i + ': ' + jsonData);
      if(jsonData) {
        const parsedData = JSON.parse(jsonData);
        // console.log(parsedData);
        list.push(parsedData.title);
        taskList[i] = parsedData.tasks;
        // setTask(parsedData.tasks);
        // console.log(i + ': ' + parsedData.tasks);
      }
      setAllLists(list);
      setAllTasks(taskList);
    }
  },[]);
  // console.log(task);
  // console.log(allLists);


  return (
    <>
      <Navbar title={title} allLists={allLists} setTitle={setTitle} setSaveIndex={setSaveIndex} allTasks={allTasks} setTask={setTask} setListName={setListName} />      
      <div className="container">
        {/* Name der ToDo-Liste */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            {/* Inhalt */}
            <Name listName={listName} setListName={setListName} setTitle={setTitle} />
          </div>
        </div>
        {/* ToDo-Liste und Tasks */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            {/* Tasks */}
            <TaskList task={task} addTask={setTask} taskContent={taskContent} setTaskContent={setTaskContent} setID={setID} ID={ID} >
              <Task task={task} setTask={setTask} />
            </TaskList> 
          </div>
        </div>
        {/* Buttons */}
        <div className="row justify-content-center">
          {/* <div className='col'></div> */}
          <div className="col-6 col-md-3 mt-3 d-flex justify-content-start">
            {/* Inhalt */}
            <Clear setTask={setTask} setTitle={setTitle} setListName={setListName} />
          </div>
          <div className="col-6 col-md-3 mt-3 d-flex justify-content-end">
            {/* Inhalt */}
            <Save task={task} title={title} listName={listName} setAllLists={setAllLists} allLists={allLists} saveIndex={saveIndex} setSaveIndex={setSaveIndex} allTasks={allTasks} setAllTasks={setAllTasks} />
          </div>
        </div>
      </div>
    </>
  )
}


export default App
