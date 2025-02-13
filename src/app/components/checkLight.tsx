import React from 'react'

function CheckLight({ onClick, disabled }: { onClick: () => undefined, disabled: boolean }) {
    return (
        <label className="relative inline-flex items-center cursor-pointer"
            onClick={onClick}
        >
            <input disabled={disabled} className="sr-only peer" type="checkbox" defaultChecked />
            <div
                className="w-20 h-10 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 peer-checked:from-blue-400 peer-checked:to-indigo-500 transition-all duration-500 after:content-['☀️'] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-8 after:w-8 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-10 peer-checked:after:content-['🌙'] after:shadow-md after:text-lg"
            ></div>
            <span className="ml-3 text-sm font-medium text-white">Encender Luz</span>
        </label>
    )
}

export default CheckLight