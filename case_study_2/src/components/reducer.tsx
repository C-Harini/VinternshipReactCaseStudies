import type { BudgetAction,BudgetState } from "../types/budget.types";

export function budgetReducer(state:BudgetState,action:BudgetAction):BudgetState{
    switch(action.type)
    {
        case "addIncome":
            return {
                ...state,
                incomes:[...state.incomes,action.payload],
                error:null
            };
       case "addExpense": {
  const totalIncome = state.incomes.reduce(
    (sum, income) => sum + income.amount,
    0
  );

  const totalExpense = state.expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  if (totalExpense + action.payload.amount > totalIncome) {
    return {
      ...state,
      error: "Insufficient balance"
    };
  }

  return {
    ...state,
    expenses: [...state.expenses, action.payload],
    error: null
  };
}

case "setCurrency":
  return {
    ...state,
    selectedCurrency: action.payload
  };

        default:
            return state;

    }
}