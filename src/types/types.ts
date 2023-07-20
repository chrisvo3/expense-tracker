import { z } from 'zod';

// Schema for each expense object
const expenseSchema = z.object({
	id: z.string(),
	title: z.string(),
	amount: z.number().positive(),
	date: z.date(),
});

// Schema for the overall expenses array
const expensesSchema = z.array(expenseSchema);

export type Expense = z.infer<typeof expenseSchema>;
export type Expenses = z.infer<typeof expensesSchema>;

// new expense data
export type NewExpenseData = {
	title: string;
	amount: string;
	date: Date;
};
