import React, { useState } from 'react';

import './App.css'



const listObj = [
  {
    id: 1,
    task: 'Learn React ',

  }, {
    id: 2,
    task: 'Do Todo Project'

  }
]

function Todo() {
  const [list, setList] = useState(listObj)

  function handleDelete(id) {
    setList(list.filter(list => list.id !== id))

  }

  return (
    <div className='app'>
      <h1>TODO APP</h1>
      <Form list={list} setList={setList} />
      <List list={list} onAddDelete={handleDelete} />
    </div>
  )
}


function Form({ list, setList }) {
  const [task, setTask] = useState('');

  function handleAddTask(e) {
    e.preventDefault();
    let newList = {
      id: list.length + 1,
      task,
    }
    setList(list => [...list, newList])
    setTask('')
  }
  return (

    <form className='form' onSubmit={handleAddTask}>
      <input value={task} placeholder='Tell me what to do next...' onChange={e => setTask(e.target.value)} />
      <button type='submit'>ADD Task</button>
    </form>
  )
}

function List({ list, onAddDelete }) {
  return (
    <div className='list'>
      {list.map(list => <ListItems list={list} key={list.id} onAddDelete={onAddDelete} />)}
    </div>
  )
}

function ListItems({ list, onAddDelete }) {


  // <input type='checkbox' />
  return (
    <div className='items'>
      <div className='heading'>
        <p>{list.id}</p>
        <p>{list.task}</p>
      </div>
      <div className='heading'>

        <p style={{ cursor: 'pointer' }} onClick={() => onAddDelete(list.id)}>🗑️</p>
      </div>
    </div>

  )
}

export default Todo;