import { Expenses } from '../../types/types';

import '../../styles/Expenses.css';
import Card from '../BaseUI/Card';
import ExpenseItem from './ExpenseItem';

export type ExpenseContainerType = {
	expenses: Expenses;
};

const ExpenseContainer = (props: ExpenseContainerType) => {
	const { expenses } = props;

	return (
		<Card className='expenses'>
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
