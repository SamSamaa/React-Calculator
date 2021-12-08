import { Action } from "../../utils/types/types"

const OperatorButton = ({ dispatch, operator }: { dispatch: React.Dispatch<Action>, operator: string }) => {
  return <button onClick={() => dispatch({ type: 'ADD_OPERATOR', payload: { operator } })}>{operator}</button>
}

export default OperatorButton;