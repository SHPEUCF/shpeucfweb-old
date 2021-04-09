import react, { useState } from 'react';
import './style.css';

export const Card = ({ children, text }: any) => {
	const [counter, setCounter] = useState(0);

	return (
		<div className = 'card'>
			<p>You clicked me { counter } times</p>
			<button onClick = { () => {
				alert('You clicked the counter');
				setCounter(counter + 1);
			} }
			>
				Increase counter
			</button>
			<p style = {{ fontWeight: 200 }}>{ children }</p>
		</div>
	);
};