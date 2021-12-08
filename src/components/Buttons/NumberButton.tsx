import { Action } from "../../utils/types/types";

const NumberButton = ({ dispatch, digit }: { dispatch: React.Dispatch<Action>, digit: string }) => {
  return <button onClick={() => dispatch({ type: 'ADD_NUMBER', payload: { digit } })}>{digit}</button>
}

export default NumberButton;