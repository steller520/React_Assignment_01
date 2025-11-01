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
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-5 font-sans relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-white/20 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 mt-8">
        <h1 className="text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 text-5xl font-bold drop-shadow-lg transform hover:scale-105 transition-transform duration-300">
          📝 To-Do List
        </h1>
        <ToDoList 
          tasks={tasks}  
          handleAddTask={handleAddTask} 
          handleDelete={handleDelete} 
          handleToggle={handleToggle} 
        />
      </div>
    </div>
  )
}

export default App