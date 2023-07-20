import { Expenses } from '../../types/types';

import '../../styles/Expenses.css';
import Card from '../BaseUI/Card';
import ExpenseItem from '../BaseUI/ExpenseItem';
import { useState } from 'react';
import ExpensesFilter from './ExpenseFilter';

export type ExpenseContainerType = {
	expenses: Expenses;
};

const ExpenseContainer = (props: ExpenseContainerType) => {
	const { expenses } = props;

	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = (selectedYear: string) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{expenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					id={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</Card>
	);
};

export default ExpenseContainer;
