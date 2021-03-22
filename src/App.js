import { isEmpty } from 'lodash'
import React, {useState} from 'react'
import shortid from 'shortid'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = (e) =>{
    e.preventDefault()
    if(isEmpty(task))
    {
      console.log("Task Empty")
      return
    }
   
    const newTask = {
      id:shortid.generate(),
      name: task
    }

    setTasks([...tasks, newTask])
    setTask("")
  }

  return (
    <div className="container mt-5">
      <h1>Tareas</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
        <h4 className="text-center">Lista de tareas</h4>
        <ul className="list-group">
        {
          tasks.map((task)=> (
          <li className="list-group-item" key={task.id}>
            <span className="lead">{task.name}</span>
            <button className="btn btn-success float-rigth mx-2">Editar</button>
            <button className="btn btn-danger float-rigth">Eliminar</button>
          </li>
          ))

        }
        
        </ul>

        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={addTask}>
            <input
            type={Text}
            className="form-control mb-2"
            placeholder="Ingrese la tarea..."
            onChange={(text) => setTask(text.target.value)}
            value={task}
            />
            <button 
              className="btn btn-dark btn-block"
              type="submit"
              >
                Agregar
            </button>
          </form>
        </div>
      </div>
    </div> 
  );
}

export default App;
