import { State } from "./types/types";

export function OperationLogic({ currentOperation, result, operator }: State) {
  const res = result && parseFloat(result);
  const input = currentOperation && parseFloat(currentOperation);

  let calculation = 0;

  if (res && input)
    switch (operator) {
      case "+":
        calculation = res + input;
        break;
      case "-":
        calculation = res - input;
        break;
      case "*":
        calculation = res * input;
        break;
      case "÷":
        calculation = res / input;
        break;
    } else {
    return "";
  }
  if (calculation === 58008) return "(.)(.)";
  return calculation.toString();
}
