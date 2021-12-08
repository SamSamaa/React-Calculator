export type State = {
  currentOperation?: string | null
  result?: string | null
  operator?: string | null
  resetResult?: boolean
}

export type Action =
  | { type: 'ADD_NUMBER', payload: { digit: string } }
  | { type: 'ADD_OPERATOR', payload: { operator: string } }
  | { type: 'RESULT' }
  | { type: 'DELETE' }
  | { type: 'RESET' };
