function Save({ task, listName }) {
    const handleSave = () => {
        const taskString = JSON.stringify(task);
        localStorage.setItem(listName, taskString);
        alert(`Tasklist saved under the name: ${listName}`);
    }

    return <button onClick={handleSave} className='btn btn-primary'>Save</button>;
}

export default Save;   