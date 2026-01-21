import { useCallback, useState } from "react";

export function UseCallbackResta(){
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const total = useCallback(() => 
    {
        console.log("recalculando Funcion...");
        return a-b;
    }, [a,b]); 

    return(
        <>
        <p>USE CALLBACK RESTA</p>
        <input
            type="number"
            placeholder="Número A"
            onChange={(e) => setA(Number(e.target.value) || 0)}
        />
        <input
            type="number"
            placeholder="Número B"
            onChange={(e) => setB(Number(e.target.value) || 0)}
        />
        <p>La resta es: {total() || '0'}</p>
        </>
    )
}