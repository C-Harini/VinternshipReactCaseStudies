export type Currency="USD"|"INR"|"EUR";
export interface TransactionBase{
    id:string;
    amount:number;
    date:Date;
    currency:Currency;
}

export interface IncomeEntry extends TransactionBase{
    source:string;
}

export interface ExpenseEntry extends TransactionBase{
    category:string;
}


export interface BudgetState{
    incomes:IncomeEntry[];
    expenses:ExpenseEntry[];
    selectedCurrency:Currency;
    error:string|null;
    
}

export type BudgetAction=|{type:"addIncome";payload:IncomeEntry}|{type:"addExpense",payload:ExpenseEntry}|{type:"setCurrency",payload:Currency}
