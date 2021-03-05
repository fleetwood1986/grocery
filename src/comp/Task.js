import React from 'react';
import { AiOutlineCheck, AiFillDelete } from 'react-icons/ai';

const Task = ({ id, title, setList, list, completed }) => {
	const check = (id) => {
		setList(
			list.map((item) => {
				if (item.id === id) {
					return { ...item, completed: !item.completed };
				}
				return item;
			})
		);
	};

	return (
		<div key={id} className={`task ${completed ? 'red' : ''}`}>
			<div>
				<h3>{title}</h3>
			</div>

			<div>
				<button onClick={() => check(id)} className="btn">
					<AiOutlineCheck />
				</button>
				<button onClick={() => setList(list.filter((item) => item.id !== id))}>
					<AiFillDelete />
				</button>
			</div>
		</div>
	);
};

export default Task;
