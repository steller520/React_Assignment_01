import React, { useState } from 'react'
import Header from './component/Header'
import ToDoList from './component/ToDoList'
import { LuNotebookPen } from "react-icons/lu";

function App() {
  const [tasks,setTasks] = useState([])
  const handleAddTask = (task) => {
    const newTask = { id: Date.now().toString(36) + Math.random().toString(36).slice(2), text: task, isChecked: false }
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

  const handleUpdate = (index, newText) => {
    const updated = tasks.map((task, i) => (i === index ? { ...task, text: newText } : task))
    setTasks(updated)
  }

  console.log(tasks);
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-5 font-sans relative overflow-hidden">
        <Header />
      {/* Floating background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-white/20 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 mt-8">
        <h1 className="text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 text-4xl font-bold drop-shadow-lg transform hover:scale-105 transition-transform duration-300">
          <LuNotebookPen className="inline-block text-purple-600 mr-2 mb-1 text-4xl"/>
           To-Do List
        </h1>
        <ToDoList 
          tasks={tasks}  
          handleAddTask={handleAddTask} 
          handleDelete={handleDelete} 
          handleToggle={handleToggle}
          handleUpdate={handleUpdate}
        />
      </div>
    </div>
    </>
  )
}

export default App