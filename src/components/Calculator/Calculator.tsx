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
  const [changeDisplayBackground, setChangeDisplayBackground] = useState<boolean>(false);

  return (
    <div className={isRotate ? "rotate wrapper" : "wrapper"}>
      <div className="displayScreen">
        <div className={changeDisplayBackground ? "backgroundPicture" : ""}>{result} {operator} {currentOperation}</div>
      </div>
      <Buttons
        dispatch={dispatch}
        isRotate={isRotate}
        setIsRotate={setIsRotate}
        changeDisplayBackground={changeDisplayBackground}
        setChangeDisplayBackground={setChangeDisplayBackground}
      />
    </div>
  )
}

export default Calculator;