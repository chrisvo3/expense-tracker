import React from 'react';

import ExpenseForm from './ExpenseForm';

import '../../styles/NewExpense.css';
import { NewExpenseData } from '../../types/types';

const NewExpense = () => {
	const handleSaveData = (data: NewExpenseData) => {
		const expenseData = {
			...data,
			id: Math.random().toString(),
		};
		console.log(expenseData);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm handleSaveData={handleSaveData} />
		</div>
	);
};

export default NewExpense;
