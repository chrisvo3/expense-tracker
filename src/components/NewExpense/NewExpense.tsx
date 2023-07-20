import React from 'react';

import ExpenseForm from './ExpenseForm';

import '../../styles/NewExpense.css';
import { Expense, NewExpenseData } from '../../types/types';

type NewExpenseProps = {
	handleAddNewExpense: (data: Expense) => void;
};

const NewExpense = (props: NewExpenseProps) => {
	const { handleAddNewExpense } = props;

	const handleSaveData = (data: NewExpenseData) => {
		const expenseData = {
			...data,
			id: Math.random().toString(),
			amount: parseFloat(data.amount),
		};
		// console.log(expenseData);
		handleAddNewExpense(expenseData as Expense);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm handleSaveData={handleSaveData} />
		</div>
	);
};

export default NewExpense;
