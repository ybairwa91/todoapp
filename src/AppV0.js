import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



function Todo() {
    const [list, setList] = useState([])


    function handleTask(task) {
        //guard clause
        if (!task.trim()) return
        setList(prevList => [...prevList, task]);

    }
    function handleDelete(id) {


    }
    return (
        <div className='app'>
            <h1>TODO LIST</h1>
            <Form onAddTask={handleTask} />
            <hr />
            <List list={list} onAddDelete={() => handleDelete} />
        </div>
    )
}

function Form({ onAddTask }) {
    const [task, setTask] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        onAddTask(task);
        setTask('');

    }

    return (

        <form className='form' onSubmit={handleSubmit}>

            <input id='input' value={task} onChange=
                {e => setTask(e.target.value)}
                placeholder='what need to be done..' />
            <button type="submit">Add Task</button>

        </form >
    )


}



function List({ list }) {


    return (
        <div className='list'>
            {
                list.map((task) => <Item task={task} key={uuidv4()} />)
            }
        </div>
    )

}
function Item({ task, onAddDelete }) {


    return (
        <div className='items'>
            <div className='heading'>
                <input type='checkbox' />
                <p>{task}</p>
            </div>
            <div className='heading'>
                <p>🖊️</p>
                <p onClick={() => onAddDelete(task.key)}>🗑️</p>
            </div>
        </div>
    )
}

