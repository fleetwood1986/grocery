import React from 'react';

const Input = ({ add, name, onChangeThing }) => {
	return (
		<div>
			<form onSubmit={add}>
				<input
					type="text"
					placeholder="e.g Eggs"
					value={name}
					onChange={(e) => onChangeThing(e)}
				/>
				<button type="submit">+</button>
			</form>
		</div>
	);
};

export default Input;
