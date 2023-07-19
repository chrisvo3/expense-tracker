import * as React from 'react';
import { useState } from 'react';

import '../../styles/ExpenseForm.css';

const ExpenseForm = () => {
	// const [inputTitle, setInputTitle] = useState('');
	// const [inputAmount, setInputAmount] = useState('');
	// const [inputDate, setInputDate] = useState('');

	const [userInput, setUserInput] = useState({
		inputTitle: '',
		inputAmount: '',
		inputDate: '',
	});

	const handleTitleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		// setInputTitle(event.target.value);
		setUserInput((prevState) => {
			return {
				...prevState,
				inputTitle: event.target.value,
			};
		});
	};

	const handleAmountInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		// setInputAmount(event.target.value);
		setUserInput((prevState) => {
			return {
				...prevState,
				inputAmount: event.target.value,
			};
		});
	};

	const handleDateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		// setInputDate(event.target.value);
		setUserInput((prevState) => {
			return {
				...prevState,
				inputDate: event.target.value,
			};
		});
	};

	const handleSubmitForm = () => {
		// console.log('Submit --', userInput);
	};

	return (
		<form>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' onChange={handleTitleInput} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						onChange={handleAmountInput}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2023-12-31'
						onChange={handleDateInput}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit' onSubmit={handleSubmitForm}>
					Add Expense
				</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
