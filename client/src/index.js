import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

const node = (
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

ReactDOM.render(node, root);