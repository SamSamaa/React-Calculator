import { Action } from "../../utils/types/types";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import RotateImg from '../../assets/rotateImg.png';

import './Buttons.css';

const Buttons = ({ dispatch, isRotate, setIsRotate }: { dispatch: React.Dispatch<Action>, isRotate: boolean, setIsRotate: (b: boolean) => void }) => {

  return (
    <div className="buttonsBox">
      <button onClick={() => dispatch({ type: 'RESET' })}>C</button>
      <button onClick={() => dispatch({ type: "DELETE" })}>DEL</button>
      <button>o</button>
      <OperatorButton operator="÷" dispatch={dispatch} />
      <NumberButton digit="7" dispatch={dispatch} />
      <NumberButton digit="8" dispatch={dispatch} />
      <NumberButton digit="9" dispatch={dispatch} />
      <OperatorButton operator="*" dispatch={dispatch} />
      <NumberButton digit="4" dispatch={dispatch} />
      <NumberButton digit="5" dispatch={dispatch} />
      <NumberButton digit="6" dispatch={dispatch} />
      <OperatorButton operator="-" dispatch={dispatch} />
      <NumberButton digit="1" dispatch={dispatch} />
      <NumberButton digit="2" dispatch={dispatch} />
      <NumberButton digit="3" dispatch={dispatch} />
      <OperatorButton operator="+" dispatch={dispatch} />
      <button onClick={() => setIsRotate(!isRotate)}>
        <img src={RotateImg} alt="rotate" />
      </button>
      <NumberButton digit="0" dispatch={dispatch} />
      <NumberButton digit="." dispatch={dispatch} />
      <button onClick={() => dispatch({ type: "RESULT" })}>=</button>
    </div>
  )
}

export default Buttons;