import React from 'react'
import { GrNotes } from "react-icons/gr";

function Header() {
return (
    <div className="relative mx-auto w-full max-w-4xl rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl backdrop-saturate-150 p-5 sm:p-6 md:p-7 text-white shadow-lg ring-1 ring-white/10">
        <div aria-hidden={true} className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden opacity-70 mix-blend-overlay">
            <div className="absolute inset-0 " />
        </div>

        <div className="relative flex items-center justify-center gap-3 sm:gap-4">
            <GrNotes className="h-8 w-8 sm:h-9 sm:w-9 text-white/90 drop-shadow-md motion-safe:animate-pulse" />
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-md">
                My ToDo App
            </h1>
        </div>
    </div>
)
}

export default Header