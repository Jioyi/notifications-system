const { Router } = require('express');
const router = Router();

router.get('/', async (req, res, next) => {
	try {
        return res.json({
			message: 'hello world',
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;