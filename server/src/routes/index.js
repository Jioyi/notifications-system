const { Router } = require('express');
//const io = require('socket.io');
const router = Router();

router.get('/', (req, res) => {
	//req.io.emit('SERVER', { sender: "ID2", message: "hola soy ID2", to: "ID1" });
	req.io.to("ID1").emit('NOTIFICATIONS', { sender: "ID2", message: "hola soy ID2", to: "ID1" });
	res.json({ message: 'This is an API!' });
});

router.use('/test', require('./test'));

module.exports = router;
