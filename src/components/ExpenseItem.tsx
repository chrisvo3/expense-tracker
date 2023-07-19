import ExpenseDate from './ExpenseDate';
import '../styles/ExpenseItem.css';
import { Expense } from '../types/types';
import Card from './Card';

const ExpenseItem = (props: Expense) => {
	const { title, amount, date } = props;

	return (
		<Card className='expense-item'>
			<ExpenseDate date={date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${amount}</div>
			</div>
		</Card>
	);
};

export default ExpenseItem;
