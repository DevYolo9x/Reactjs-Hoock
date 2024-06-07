import React, { useState } from 'react';

function Example(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(20);
  const {name, age, gender} = props;
  const [listTask, setListTask] = useState(['Taksk 01', 'Task 02'])

  return (
    <div>
      <p>You clicked <b className="text-danger">{count}</b> times</p>
      <p>Task: <b className="text-danger">{listTask.toString()}</b></p>
      <p>Name: <b className="text-danger">{name}</b></p>
      <p>Age: <b className="text-danger">{age}</b></p>
      <p>Gender: <b className="text-danger">{gender}</b></p>
      <button className="btn btn-danger" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  ); 
}

export default Example;