import * as React from 'react';
import { useState } from 'react';

import '../../styles/ExpenseForm.css';
import { NewExpenseData } from '../../types/types';

// type PrevStateType = {
// 	inputTitle: string;
// 	inputAmount: string;
// 	inputDate: string;
// };

type ExpenseFormProps = {
	handleSaveData: (data: NewExpenseData) => void;
};

const ExpenseForm = (props: ExpenseFormProps) => {
	const { handleSaveData } = props;

	const [inputTitle, setInputTitle] = useState('');
	const [inputAmount, setInputAmount] = useState('');
	const [inputDate, setInputDate] = useState('');

	// alternative 2
	// const [userInput, setUserInput] = useState({
	// 	inputTitle: '',
	// 	inputAmount: '',
	// 	inputDate: '',
	// });

	const handleTitleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputTitle(event.target.value);
		// setUserInput((prevState: PrevStateType) => {``
		// 	return {
		// 		...prevState,
		// 		inputTitle: event.target.value,
		// 	};
		// });
	};

	const handleAmountInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputAmount(event.target.value);
		// setUserInput((prevState: PrevStateType) => {
		// 	return {
		// 		...prevState,
		// 		inputAmount: event.target.value,
		// 	};
		// });
	};

	const handleDateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputDate(event.target.value);
		// setUserInput((prevState: PrevStateType) => {
		// 	return {
		// 		...prevState,
		// 		inputDate: event.target.value,
		// 	};
		// });
	};

	// alternative 3
	// const handleNewInput = (identifier: string, value: string) => {
	// 	if (identifier === 'title') setInputTitle(value);
	// 	if (identifier === 'date') setInputDate(value);
	// 	if (identifier === 'amount') setInputAmount(value);
	// };

	const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
		// console.log('Submit --', userInput);
		event?.preventDefault();

		const newExpenseData = {
			title: inputTitle,
			amount: inputAmount,
			date: new Date(inputDate),
		};

		console.log('newExpenseData', newExpenseData);
		handleSaveData(newExpenseData as NewExpenseData);

		// reset
		setInputTitle('');
		setInputAmount('');
		setInputDate('');
	};

	return (
		<form onSubmit={handleSubmitForm}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' value={inputTitle} onChange={handleTitleInput} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						value={inputAmount}
						onChange={handleAmountInput}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2023-12-31'
						value={inputDate}
						onChange={handleDateInput}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
