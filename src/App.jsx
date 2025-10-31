import React, { useState } from 'react'
import ToDoList from './component/ToDoList'

function App() {
  const [tasks,setTasks] = useState([])
  const handleAddTask = (task) => {
    const newTask = { text: task, isChecked: false }
    setTasks([...tasks, newTask])
    console.log(tasks);
  }
  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  const handleToggle = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, isChecked: !task.isChecked }
      }
      return task
    })
    setTasks(newTasks)
  } 

  console.log(tasks);
  return (
    <div>
      <ToDoList tasks={tasks}  handleAddTask={handleAddTask} handleDelete={handleDelete} handleToggle={handleToggle} />
    </div>
  )
}

export default App