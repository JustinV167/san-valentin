import React from 'react'
interface paramsDialogModal {
    tailsClass?: string;
    componentClass?: string;
    color?: string
    text?: string
    chopTailColor?: string
}
function DialogModal(params: paramsDialogModal) {
    return (
        <div className='absolute'>
            <div className={`${params?.componentClass ?? ""} w-full  h-full p-3 z-10 relative ${params?.color ?? "bg-[#FFEFC8]"}  rounded-lg`}>
                {params?.text}
            </div>
            <div className='relative flex justify-end translate-x-4  '>
                <div className={`${params?.color ?? "bg-[#FFEFC8]"} w-10 h-9 rounded-es-full `}>
                </div>
                <div className={`${params?.chopTailColor ?? "bg-white"} w-6 h-11 mb-1 rounded-es-full -translate-y-1 -ml-3 `}>
                </div>
            </div>
        </div>
    )
}

export default DialogModal