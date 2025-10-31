import React, { useState } from 'react'
import ToDoItem from './ToDoItem'
import { IoAddCircleSharp } from "react-icons/io5";

function ToDoList({tasks, handleAddTask , handleDelete , handleToggle }) {
  const [inputValue, setInputValue] = useState('');

  

  

return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex flex-col  items-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">ToDoList</h1>
                    <div className="flex items-center mb-6">
                            <input
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors" 
                                    type="text" 
                                    placeholder="Enter a new task..."
                            />
                            <button 
                                    className="ml-3 text-blue-500 hover:text-blue-700 transform hover:scale-110 transition-all duration-200" 
                                    onClick={() => {
                                      if (inputValue.trim()) {
                                        handleAddTask(inputValue);
                                        setInputValue('');
                                      }
                                    }}
                            >
                                    <IoAddCircleSharp className="h-8 w-8"/>
                            </button>
                    </div>
                    {
                    tasks.map((task, index) => (
                        <ToDoItem key={index} task={task} index={index} handleDelete={handleDelete} handleToggle={handleToggle} />
                    ))
                    }
                    
            </div>
    </div>
)
}

export default ToDoList