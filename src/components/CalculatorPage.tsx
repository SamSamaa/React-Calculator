import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Calculator from "./Calculator/Calculator";

import './CalculatorPage.css';

const CalculatorPage = () => {
  const { userName } = useContext(GlobalContext);

  return (
    <div className="calculatorPage">
      <span>HAVE FUN <br />{userName.toUpperCase()}</span>
      <Calculator />
    </div>
  )
}

export default CalculatorPage;