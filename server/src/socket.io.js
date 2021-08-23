const app = require('./app.js');
const io = require('socket.io')(app, {
	cors: {
		origin: process.env.CLIENT_URL,
	},
});

module.exports = io;
/*const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
	cors: {
		origin: process.env.CLIENT_URL,
	},
});
const clientsOnline = {};
app.use(morgan('dev'));
app.use(express.json());
app.use(
	cors({
		origin: 'http://localhost:3000',
	})
);

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', process.env.CLIENT_URL);
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || err;
	console.error(err);
	res.status(status).send(message);
});

app.use('/', require('./routes'));
io.on('connection', (socket) => {
	console.log('Client connected:', socket.handshake.query.ID);
	clientsOnline[socket.handshake.query.ID] = socket;

	socket.on('SERVER', (data) => {
		if (clientsOnline[data.to]) {
			clientsOnline[data.to].emit('SERVER', data);
		}
	});
	socket.on('disconnect', () => {
		delete clientsOnline[socket.handshake.query.ID];
	});
});

module.exports = { server, io, clientsOnline };*/
