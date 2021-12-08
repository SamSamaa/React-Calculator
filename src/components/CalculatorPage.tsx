import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Calculator from "./Calculator/Calculator";

import './CalculatorPage.css';

const CalculatorPage = () => {
  const { userName } = useContext(GlobalContext);

  return (
    <div className="calculatorPage">
      <h1>HAVE FUN <br />{userName.toUpperCase()}</h1>
      <Calculator />
    </div>
  )
}

export default CalculatorPage;
