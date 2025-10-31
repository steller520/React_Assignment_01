import React from 'react'
import { GrNotes } from "react-icons/gr";

function Header() {
return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex justify-center items-center shadow-lg">
        <h1 className="text-3xl font-bold inline-block tracking-wide">My ToDo App</h1>
        <GrNotes className="h-8 w-8 inline-block ml-3 animate-pulse" />
    </div>
)
}

export default Header