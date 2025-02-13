"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { confetti } from 'dom-confetti'; // Importación corregida


export default function AcceptView() {
    const [showModal, setShowModal] = useState(false)
    const confettiRef = useRef<HTMLDivElement>(null);
    const handleConfetti = () => {
        if (confettiRef.current) {
            confetti(confettiRef.current, {
                angle: 90,
                spread: 45,
                startVelocity: 35,
                elementCount: 50,
                dragFriction: 0.1,
                duration: 3000,
                stagger: 3,
                colors: ['#bb0000', '#ffffff'],
            });
        }
        setTimeout(() => setShowModal(false), 2000)

    };
    useEffect(() => {
        setTimeout(() => { setShowModal(true) }, 2000)
    }, [])
    return (
        <div className='fixed w-screen z-30 top-10'>

            {showModal && <div className='bg-[#FFEFC8] mx-auto rounded-lg w-[90vw] sm:w-[60vw] min-h-[60vw] sm:min-h-[30vw] flex flex-col p-4'>
                <p className='text-2xl'>¿Quieres escapar del fierro golpeador de parejas conmigo?</p>
                <div className='justify-between items-end px-4 w-full flex-1 flex'>
                    <button className='fixed w-20 h-14 bg-red-400 rounded-xl hover:bg-red-500'
                        onClick={(e) => {
                            const target = e.currentTarget as HTMLButtonElement
                            target.style.top = (Math.random() * (90 - 0) + 0) + "vh"
                            target.style.left = (Math.random() * (80 - 0) + 0) + "vw"
                        }}
                    >No!!</button>
                    <div className='ml-auto '>

                        <div ref={confettiRef} />

                        <button className='w-20 h-14 bg-green-400 rounded-xl hover:bg-green-500'
                            onClick={handleConfetti}
                        >
                            SIII</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}
