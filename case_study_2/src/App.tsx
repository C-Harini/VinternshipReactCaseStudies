import { useReducer } from "react";
import { budgetReducer } from "./components/reducer";
import type { BudgetState, Currency } from "./types/budget.types";

const initialState: BudgetState = {
  incomes: [],
  expenses: [],
  selectedCurrency: "USD",
  error: null
};

function App() {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  // Calculate totals
  const totalIncome = state.incomes.reduce(
    (sum, income) => sum + income.amount,
    0
  );

  const totalExpense = state.expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
   const handleCurrencyChange = (
  e: React.ChangeEvent<HTMLSelectElement>
) => {
  const selected = e.target.value as Currency;
  dispatch({ type: "setCurrency", payload: selected });
};

  const balance = totalIncome - totalExpense;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Budget Tracker</h2>

      <h3>
        Balance: {balance} {state.selectedCurrency}
      </h3>

      {state.error && (
        <p style={{ color: "red",backgroundColor:"yellow" }}>{state.error}</p>
      )}

      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() =>
            dispatch({
              type: "addIncome",
              payload: {
                id: "A1",
                amount: 200,
                currency: "USD",
                date: new Date(),
                source: "Salary"
              }
            })
          }
        >
          Add Income (200)
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "addExpense",
              payload: {
                id: "A2",
                amount: 100,
                currency: "USD",
                date: new Date(),
                category: "Food"
              }
            })
          }
        >
          Add Expense (100)
        </button>
      </div>

      <div>
        <label>Select Currency: </label>
        <select
  value={state.selectedCurrency}
  onChange={handleCurrencyChange}
>
  <option value="USD">USD</option>
  <option value="INR">INR</option>
  <option value="EUR">EUR</option>
</select>

      </div>
    </div>
  );
}

export default App;
