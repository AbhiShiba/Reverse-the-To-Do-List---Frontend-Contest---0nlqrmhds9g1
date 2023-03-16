import React, { useState } from 'react'
import '../styles/App.css';

function ToDo({todos,item, setTodos}) {
  const [ip,setIp] = useState(item.ipData)
  const handleChange = (e) => {
    setIp(e.target.value)
  }
  return (<tr>
    <td>
      <p>{item.id}</p>
    </td>
    <td>
      <input onChange={handleChange} value={ip} />
    </td>
    <td>
      <p>{item.createdAt}</p>
    </td>
  </tr>)
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
    ipData: "",
  }, {
    id: 'todo2',
    createdAt: '18:00',
    ipData: "",
  }
  ]);

  return (
    <div id="main">
      <button onClick={() =>{

      }}>Reverse</button>
      <table>
        <tbody>
          {todos.map((item,index) => {
            return <ToDo key={index} data={todos} item={item} setTodos={setTodos} />
          })}
        </tbody>
      </table>
    </div>
  )
}


export default App;
