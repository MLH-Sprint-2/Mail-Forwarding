const { forwardemail } = require('../utils/forwardemail');

function checkBody(req, res, next) {
	if (!req.body.name || !req.body.recipients) {
		return res.status(400).json({
			status: 'fail',
			message: 'Missing name or recipient',
		});
	}
	next();
}

function getAlias(req, res) {
	(async () => {
		try {
			const data = await forwardemail('Get');
			if (data.statusCode) {
				res.status(data.statusCode).json({
					status: 'fail',
					message: data
				})
			}
			res.status(200).json({
				status: data.statusCode,
				data: {
					data,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
}

function createAlias(req, res) {
	(async (body) => {
		try {
			const data = await forwardemail('POST', body);
			if (data.statusCode) {
				res.status(data.statusCode).json({
					status: 'fail',
					message: data
				})
			}
			res.status(data.statusCode).json({
				status: data.statusCode,
				data: {
					data,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})(req.body);
}

module.exports = {
	getAlias,
	checkBody,
	createAlias,
};
