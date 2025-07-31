function Save({ task, title, setAllLists, allLists, saveIndex, allTasks, setAllTasks }) {
    const handleSave = () => {
        const list = [...allLists];
        const tasklist = [...allTasks];
        list[saveIndex] = title;
        tasklist[saveIndex] = task;
        setAllTasks(tasklist);
        setAllLists(list);
        // if(allLists.length < 5) {
        //     setAllLists(prev => [...prev, title]);
        // } else {
        //     setAllLists(prev =>{
        //       return prev.map((item, index) => {
        //                 if(index === saveIndex) {
        //                     return title;
        //                 } else {
        //                     return item;
        //                 }
        //             });  
        //     });
        // }
        const taskObject = {
            title: title,
            tasks: task,
        };
        const taskString = JSON.stringify(taskObject);
        localStorage.setItem(saveIndex, taskString);
        // if(saveIndex === 4) {
        //     setSaveIndex(0);
        // } else {
        //     setSaveIndex(prev => prev + 1);
        // }
        alert(`Tasklist saved under the name: ${title}`);
    }

    return <button onClick={handleSave} className='btn btn-primary'>Save</button>;
}

export default Save;   