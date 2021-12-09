import { OperationLogic } from "../utils/OperationLogic";
import { Action, State } from "../utils/types/types";

export const calculatorReducer = (state: State, action: Action) => {
  switch (action.type) {
    /** ADD A NUMBER  */
    case 'ADD_NUMBER':
      if (state.resetResult) {
        return {
          ...state,
          currentOperation: action.payload.digit,
          result: null,
          resetResult: false
        };
      };
      if (action.payload.digit === "." && state.currentOperation === null) return state;
      if (action.payload.digit === "." && state.currentOperation && state.currentOperation.includes(".")) return state;
      if (action.payload.digit === "0" && state.currentOperation === "0") return state;

      return {
        ...state,
        currentOperation: `${state.currentOperation || ""}${action.payload.digit}`
      };

    /** ADD AN OPERATOR (+,-,*,/)  */
    case 'ADD_OPERATOR':
      if (state.currentOperation === "" && state.result === null) return state;
      if (state.currentOperation && parseFloat(state.currentOperation) === Number.POSITIVE_INFINITY) return {};
      if (state.result === null)
        return {
          ...state,
          currentOperation: null,
          result: state.currentOperation,
          operator: action.payload.operator
        };
      if (state.currentOperation === null) {
        return {
          ...state,
          operator: action.payload.operator
        };
      };

      return {
        ...state,
        currentOperation: null,
        result: OperationLogic(state),
        operator: action.payload.operator
      };

    /** PRESS EQUAL (=) */
    case 'RESULT':
      if (state.operator === null || state.currentOperation === null || state.result === null) return state;

      return {
        ...state,
        currentOperation: null,
        result: OperationLogic(state),
        operator: null,
        resetResult: true
      };

    /** DELETE LAST INPUT */
    case 'DELETE':
      if (state.currentOperation === null) return state;
      if (state.currentOperation?.length === 1)
        return {
          ...state,
          currentOperation: null
        };
      if (state.currentOperation)
        return {
          ...state,
          currentOperation: state.currentOperation.slice(0, -1)
        }

      return state;

    /** CLEAN THE DISPLAYSCREEN */
    case 'RESET':
      return {
        ...state,
        currentOperation: "",
        result: null,
        operator: null
      };

    default:
      return state;
  };
};