import { Expenses } from '../types/types';
import ExpenseItem from './ExpenseItem';

import '../styles/Expenses.css';

export type ExpenseContainerType = {
	expenses: Expenses;
};

const ExpenseContainer = (props: ExpenseContainerType) => {
	const { expenses } = props;

	return (
		<div className='expenses'>
			{expenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					id={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</div>
	);
};

export default ExpenseContainer;
