import { useState } from "react";
import Calculator from "../components/CalculatorForm";
import Answer from "../components/Answer";

const Display = () => {

const [sum, setSum] = useState(0);

const add = (value1, value2) => {
    setSum(value1 + value2);
}

return(
    <>
    <Calculator add = {add} />
    <Answer answer = {sum} />
    </>
);

}

export default Display;