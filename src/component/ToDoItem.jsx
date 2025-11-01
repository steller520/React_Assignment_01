import React from 'react'

function ToDoItem({ task, index, handleDelete, handleToggle }) {
    return (
    <div className="flex items-center justify-between p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 hover:border-purple-200">
        <div className="flex items-center gap-4">
            <input 
                type="checkbox" 
                className="w-6 h-6 text-purple-500 bg-white border-purple-300 rounded-lg focus:ring-purple-500 focus:ring-2 cursor-pointer transform hover:scale-110 transition-transform duration-200" 
                checked={task.isChecked}
                onChange={() => handleToggle(index)} 
            />
            <span className={`text-lg font-medium transition-all duration-300 ${task.isChecked ? "line-through text-gray-500" : "text-gray-800"}`}>
                {task.text}
            </span>
        </div>
        <button 
            className="text-red-500 hover:text-white hover:bg-red-500 px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-red-200 hover:border-red-500" 
            onClick={() => handleDelete(index)}
        >
            Delete
        </button> 
    </div>
  )
}

export default ToDoItem