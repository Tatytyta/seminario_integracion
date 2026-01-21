import { useRef, useState } from "react";

export function UseRefAreaRectangulo(){
    const baseRef = useRef<HTMLInputElement>(null);
    const heightRef = useRef<HTMLInputElement>(null);

    const [area, setArea] = useState(0);
    const calcularArea = () => {
        const base = Number(baseRef.current?.value) || 0;
        const height = Number(heightRef.current?.value) || 0;
        setArea((base * height) / 2);
    }
    return(
        <>
            <input 
                ref={baseRef}
                type="number"
                placeholder="Base"
            />
            <input 
                ref={heightRef}
                type="number"
                placeholder="Altura"
            />
            <button onClick={calcularArea}>Calcular Área</button>
            <p>El área es :{area || '0'}</p>
        </>
    )
}