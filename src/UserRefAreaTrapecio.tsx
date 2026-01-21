import { useRef, useState } from "react";

export function UseRefAreaTrapecio(){
    const baseMinRef = useRef<HTMLInputElement | null>(null);
    const baseMajRef = useRef<HTMLInputElement | null>(null);
    const heightRef = useRef<HTMLInputElement | null>(null);

    const [area, setArea] = useState(0);

    const calcArea = () => {
        const baseMin = Number(baseMinRef.current?.value || 0);
        const baseMaj = Number(baseMajRef.current?.value || 0);
        const height = Number(heightRef.current?.value || 0);

        setArea(((baseMin+baseMaj)*height)/2);
    }
    return(
        <>
            <input 
                ref={baseMinRef}
                type="number"
                placeholder="Escribe un numero"
            />
            <input 
                ref={baseMajRef}
                type="number"
                placeholder="Escribe un numero"
            />
            <input 
                ref={heightRef}
                type="number"
                placeholder="Escribe un numero"
            />
            <button onClick={calcArea}>
                Calcular
            </button>
            <p>{area || 0}</p>
        </>
    )
}