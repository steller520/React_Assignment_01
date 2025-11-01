import React, { useState } from 'react'
import ToDoItem from './ToDoItem'
import { IoAddCircleSharp } from "react-icons/io5";

function ToDoList({ tasks, handleAddTask, handleDelete, handleToggle, handleUpdate }) {
        // State for input field
        const [inputValue, setInputValue] = useState('');

        // Handle adding a new task
        return (
                <div className="w-full">
                        <div className="flex items-center gap-3 mb-8">
                                {/*input field for new task */}
                                <input
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        className="flex-1 border-2 border-purple-200 rounded-xl px-5 py-4 bg-gradient-to-r from-purple-50 to-pink-50 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-200 transition-all duration-300 text-gray-700 placeholder-gray-500 shadow-inner"
                                        type="text"
                                        placeholder="What needs to be done? ✨"
                                />
                                {/* Add task button */}
                                <button
                                        className="text-purple-500 hover:text-purple-700 transform hover:scale-110  transition-all duration-300 p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl hover:shadow-lg"
                                        onClick={() => {
                                                if (inputValue.trim()) {
                                                        handleAddTask(inputValue);
                                                        setInputValue('');
                                                }
                                        }}
                                >
                                        <IoAddCircleSharp className="h-10 w-10" />
                                </button>
                        </div>
                        {/* Tasks list */}
                        <div className="space-y-3">
                                {tasks.length === 0 ? (
                                        // Render when no tasks are present
                                        <div className="text-center py-12">
                                                <div className="text-6xl mb-4">🌟</div>
                                                <p className="text-gray-500 text-lg font-medium">No tasks yet!</p>
                                                <p className="text-gray-400 text-sm mt-2">Add your first task above to get started</p>
                                        </div>
                                ) : (  
                                        // Render each ToDo item
                                        tasks.map((task, index) => (
                                                <ToDoItem
                                                        key={task.id ?? index}
                                                        task={task}
                                                        index={index}
                                                        handleDelete={handleDelete}
                                                        handleToggle={handleToggle}
                                                        handleUpdate={handleUpdate}
                                                />
                                        ))
                                )}
                        </div>
                </div>
        )
}

export default ToDoList