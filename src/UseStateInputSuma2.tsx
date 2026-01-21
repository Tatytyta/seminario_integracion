import { useState } from "react";

export function UseStateInputSuma2(){
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const suma = numero1 + numero2;
    return(
        <>
        <p>SUMA 2</p>
            <input 
                value={numero1}
                placeholder="Escribe un número 1"
                onChange={(e) => setNumero1(Number(e.target.value) || 0)}
            />
            <input 
                value={numero2}
                placeholder="Escribe un número 2"
                onChange={(e) => setNumero2(Number(e.target.value) || 0)}
            />
            <p>la suma es :{suma || '0'}</p>
        </>
    )
}