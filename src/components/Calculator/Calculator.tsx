import { useReducer, useState } from "react";
import { calculatorReducer } from "../../reducer/Reducer";
import Buttons from "../Buttons/Buttons";

import './Calculator.css';

const Calculator = () => {
  const [{ currentOperation, result, operator }, dispatch] = useReducer(calculatorReducer, {
    currentOperation: "",
    result: null,
    operator: null
  });

  const [isRotate, setIsRotate] = useState<boolean>(false);

  return (
    <div className={isRotate ? "rotate wrapper" : "wrapper"}>
      <div className="displayScreen">
        <div>{result} {operator} {currentOperation}</div>
      </div>
      <Buttons
        dispatch={dispatch}
        isRotate={isRotate}
        setIsRotate={setIsRotate}
      />
    </div>
  )
}

export default Calculator;