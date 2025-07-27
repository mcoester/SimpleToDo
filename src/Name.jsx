function Name({ listName, setListName }){
    return(
        <>
            <input value={listName} onChange={({ target }) =>{
                setListName(target.value);
            }} type="text" className="form-control individualBorder my-5" placeholder="Title" aria-label="Title"/>
        </>
    )
}

export default Name;