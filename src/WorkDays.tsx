import React from 'react';

type Props = {
    horus: number[];
    setHorus: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function WorkDays({horus, setHorus}: Props){
    const days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie'];

    const onChangeHour = (i: number, value: string)=>{
        const hour = Number(value) || 0;
        setHorus((prev) => prev.map((v, idx) => (idx === i ? hour : v)));
    }

    return (
        <section>
            {days.map((day, i) => (
                <div key={day}>
                    <label>{day}</label>
                    <input 
                        type="number"
                        value={horus[i]}
                        onChange={(e) => onChangeHour(i, e.target.value)}
                    />
                </div>
            ))}
        </section>
    )
}