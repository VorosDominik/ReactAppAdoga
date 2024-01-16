import React, { useState } from 'react';
import './Kieg.css';
import Allapot from '../Allapot/Allapot';

function Kieg(props) {
    
    const [inputValue, setInputValue] = useState();
    const [joe, setjoe] = useState(0);

    

    const valasz = () => {
        const helyes = props.helyes[props.index];
        console.log("Input értéke:", inputValue);
        if (inputValue === helyes) {
            setjoe(1);
        } else if (inputValue !== helyes) {
            setjoe(2);
        } else {
            setjoe(3);
        }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        valasz(props.helyes)
    }

    const parts = props.mondat.split('_');

    return (
        <div className="Kieg">
            {parts.map((part, index) => (
                index % 2 === 0 ? (
                    <span key={index}>{part}</span>
                ) : (
                    <React.Fragment key={index}>
                        <input   type="text"   id="valasz"   name="valasz"   value={inputValue}   onChange={handleInputChange} />
                        <span>{part}</span>
                    </React.Fragment>
                )
            ))}
            <Allapot Allapot={1} katt={props.katt} />
        </div>
    );
}

export default Kieg;
