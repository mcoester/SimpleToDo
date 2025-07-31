// import React, {useEffect} from 'react';

function Name({ listName, setListName, setTitle }) {
    // useEffect(() => {}, [listName]);

    const changeTitle = (e) => {
        if(e.key === 'Enter') {
            setTitle(listName);
        }
    }

    return(
        <>
            <input value={listName} onBlur={() =>{
                setTitle(listName);
            }} onKeyDown={e =>{
                changeTitle(e);
            }} onChange={({ target }) =>{
                setListName(target.value);
            }} type="text" className="form-control individualBorder my-5" placeholder="Title" aria-label="Title"/>
        </>
    )
}

export default Name;