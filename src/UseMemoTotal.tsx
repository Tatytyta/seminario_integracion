import {useMemo, useState} from "react";

export function UseMemoTotal(){
    const [prince, setPrince] = useState(0);
    const [qty, setQty] = useState(0);

    const total = useMemo(() => 
        {
        console.log("Recalculando total");
        return prince * qty;
    }, [prince, qty]);

    return(
        <>
        <p>USE MEMO TOTAL</p>
            <input 
                value={prince}
                placeholder="Precio"
                onChange={(e) => setPrince(Number(e.target.value) || 0)}
                
            />
            <input 
                value={qty}
                placeholder="Cantidad"
                onChange={(e) => setQty(Number(e.target.value) || 0)}
                
            />

            <p>Total: {total || '0'}</p>
        </>
    )
}