import React from "react";
import { useState } from "react";

const Calculator = (props) => {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    const onInputChange = (e) => {
        const val = Number(e.target.value);
        switch(e.target.name){
            case "value1":
                setValue1(val);
                break;
            
            case "value2":
                setValue2(val);
                break;
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.add(value1, value2);
    }

    return(
        <>
        <form>
            <input type="number" name="value1" onChange={onInputChange} /> + 
            <input type="number" name="value2" onChange={onInputChange} />
            <button onClick={handleOnSubmit}>Show Answer</button>
        </form>
        </>
    )


}

export default Calculator;