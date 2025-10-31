import React from 'react'

function ToDoItem({ task, index, handleDelete, handleToggle }) {
    return (
    <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <div className="flex items-center">
            <input 
                type="checkbox" 
                className="mr-3" 
                checked={task.isChecked}
                onChange={() => handleToggle(index)} 
            />
            <h2 className={`text-lg ${task.isChecked ? "line-through text-gray-500" : "text-gray-800"}`}>
                {task.text}
            </h2>
        </div>
        <button 
            className="text-red-500 hover:text-red-700 px-3 py-1 rounded transition-colors" 
            onClick={() => handleDelete(index)}
        >
            Delete
        </button> 
    </div>
  )
}

export default ToDoItem