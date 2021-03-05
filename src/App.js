import React, { useState, useEffect } from 'react';
import './app.css';
import Input from './comp/Input';
import Task from './comp/Task';

function App() {
	let getLocalStorage = () => {
		let listt = localStorage.getItem('list');
		if (listt) {
			return JSON.parse(localStorage.getItem('list'));
		} else {
			return [];
		}
	};

	const [name, setName] = useState('');
	const [list, setList] = useState(getLocalStorage());

	const add = (e) => {
		e.preventDefault();
		if (!name) {
			return null;
		} else {
			const newItem = {
				id: new Date().getTime().toString(),
				title: name,
				completed: false,
			};
			setList([newItem, ...list]);
			setName('');
		}
	};
	const onChangeThing = (e) => {
		setName(e.target.value);
	};
	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list));
	}, [list]);
	return (
		<div className="main">
			<h1>Grocery Bud</h1>
			<Input name={name} add={add} onChangeThing={onChangeThing} />

			{list.map((item) => {
				const { id, title, completed } = item;

				return (
					<Task
						list={list}
						setList={setList}
						title={title}
						id={id}
						completed={completed}
					/>
				);
			})}
		</div>
	);
}

export default App;
