"use client"
import { useEffect, useState } from 'react';
interface hearthsInterface {
    id: number, src: string, size: number, left: number, animationDuration: number
}
const HearthsRain = ({ clickHearth }: { clickHearth: () => undefined }) => {
    const [hearths, setHearths] = useState<hearthsInterface[]>([]);
    const imageneshearths = [
        '/kirby2.webp',
    ];
    useEffect(() => {
        const createHearts = () => {
            const indiceAleatorio = Math.floor(Math.random() * imageneshearths.length);
            const src = imageneshearths[indiceAleatorio];
            const size = Math.random() * 50 + 20; // Tamaño aleatorio entre 20 y 70px
            const startLeft = Math.random() * window.innerWidth; // Posición horizontal aleatoria
            const animationDuration = Math.random() * 3 + 2; // Duración de la animación aleatoria entre 2 y 5 segundos
            const newHearth = {
                id: Math.random(),
                src: src,
                size: size,
                left: startLeft,
                animationDuration: animationDuration,
            };
            setHearths(prev => [...prev, newHearth]);
        };

        const intervalId = setInterval(createHearts, 500); // Crea un corazón cada 200ms

        return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
    }, []);

    const estilosCorazon = (hearth: hearthsInterface) => ({
        position: 'fixed',
        top: '-100px', // Inicia desde arriba de la pantalla
        left: `${hearth.left}px`,
        width: `${hearth.size + 15}px`,
        height: `${hearth.size + 15}px`,
        cursor: "pointer",
        zIndex: 10,
        animation: `down ${hearth.animationDuration + 6}s linear forwards`,
        animationSpan: `rotar ${hearth.animationDuration + 6}s linear forwards infinite`
    });
    const eliminarCorazon = (id: number) => {
        setHearths(prevhearths => prevhearths.filter(corazon => corazon.id !== id));
    };

    return (
        <>
            <style jsx>{`
                @keyframes down {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(110vh);
                    }
                }
                    @keyframes rotar {
                    0% {
                        transform: rotate(0);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
            {hearths.map(corazon => {
                const styleHearth = estilosCorazon(corazon)
                const animationSpan = styleHearth.animationSpan;
                return (
                    <span key={corazon.id}
                        style={styleHearth as { top: string }} onAnimationEnd={() => eliminarCorazon(corazon.id)}
                        onClick={() => { clickHearth(); eliminarCorazon(corazon.id) }}>

                        <img
                            src={corazon.src}
                            alt="Corazón"
                            style={{ animation: animationSpan }}
                        />
                    </span>
                )
            })}
        </>
    );
};

export default HearthsRain;