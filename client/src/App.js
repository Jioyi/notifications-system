import React, { useState, useEffect } from 'react';
import openSocketIO from 'socket.io-client';
const ENDPOINT = 'http://localhost:3001';

const App = () => {
	const [socket1, setSocket1] = useState(null);
	const [response1, setResponse1] = useState({});

	const [socket2, setSocket2] = useState(null);
	const [response2, setResponse2] = useState({});

	useEffect(() => {
		/*return () => {
			newSocket.close();
			setSocket(null);
		};*/
	}, []);

	const conectID1 = () => {
		const newSocket = openSocketIO(ENDPOINT, { query: { ID: 'ID1' } });
    setSocket1(newSocket);
		newSocket.on('NOTIFICATIONS', (data) => {
			setResponse1(data);
			console.log('Recivido por ID1:', data);
		});
		/*newSocket.on('ID1', (data) => {
			setResponse1(data);
			console.log('ID1', data);
		});*/
	};

	const desconectID1 = () => {
		socket1.close();
		setSocket1(null);
	};

	const conectID2 = () => {
		const newSocket = openSocketIO(ENDPOINT, { query: { ID: 'ID2' } });
		setSocket2(newSocket);
		newSocket.on('NOTIFICATIONS', (data) => {
			setResponse2(data);
			console.log('Recivido por ID2:', data);
		});
		/*newSocket.on('ID2', (data) => {
			setResponse2(data);
			console.log('ID2', data);
		});*/
	};

	const desconectID2 = () => {
		socket2.close();
		setSocket2(null);
	};

	const sendMessageTo1 = () => {
		socket1.emit('NOTIFICATIONS', {
			sender: 'ID1',
			message: 'hola soy ID1',
			to: 'ID2',
		});
	};
	const sendMessageTo2 = () => {
		socket2.emit('NOTIFICATIONS', {
			sender: 'ID2',
			message: 'hola soy ID2',
			to: 'ID1',
		});
	};

	return (
		<div>
			<div>
				{socket1 ? (
					<>
						<button onClick={sendMessageTo1}>enviar mensaje al ID-2</button>
						<button onClick={desconectID1}>desconectar ID-1</button>
					</>
				) : (
					<button onClick={conectID1}>conectar ID-1</button>
				)}
				<div>Respuesta para ID-1: {response1?.message}</div>
			</div>
			<div>
				{socket2 ? (
					<>
						<button onClick={sendMessageTo2}>enviar mensaje al ID-1</button>
						<button onClick={desconectID2}>desconectar ID-2</button>
					</>
				) : (
					<button onClick={conectID2}>conectar ID-2</button>
				)}
				<div>Respuesta para ID-2: {response2?.message}</div>
			</div>
		</div>
	);
};

export default App;
