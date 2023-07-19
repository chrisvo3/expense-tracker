import ExpenseDate from './ExpenseDate';
import '../../styles/ExpenseItem.css';
import { Expense } from '../../types/types';
import Card from '../BaseUI/Card';
import { useState } from 'react';

const ExpenseItem = (props: Expense) => {
	const { title, amount, date } = props;
	const [newTitle, setNewTitle] = useState(title);

	const handleChangeTitle = () => {
		setNewTitle('Something new');
	};

	return (
		<Card className='expense-item'>
			<ExpenseDate date={date} />
			<div className='expense-item__description'>
				<h2>{newTitle}</h2>
				<div className='expense-item__price'>${amount}</div>
			</div>
			<button onClick={handleChangeTitle}>Change title</button>
		</Card>
	);
};

export default ExpenseItem;
