import React, { ChangeEvent } from 'react';
import '../../styles/ExpensesFilter.css';

type ExpensesFilterProps = {
	selected: string;
	onChangeFilter: (selectedYear: string) => void;
};

const ExpensesFilter: React.FC<ExpensesFilterProps> = (props) => {
	const { selected, onChangeFilter } = props;

	const dropdownChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
		onChangeFilter(event.target.value);
	};

	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select value={selected} onChange={dropdownChangeHandler}>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
