const { forwardemail } = require('../utils/forwardemail');

function checkBody(req, res, next) {
	if (!req.body.name || !req.body.recipients) {
		return res.status(400).json({
			status: 'fail',
			message: 'Missing name, recipient',
		});
	}
	next();
}

function getAlias(req, res) {
	(async () => {
		try {
			const data = await forwardemail('get', req.params.domain);
			if (data.statusCode == 404) {
				res.status(404).json(data);
			} else if (data.statusCode) {
				// if statusCode is defined it means there was an error
				res.status(500).json(data);
			} else {
				// no error
				res.status(200).json(filterData(data));
			}
		} catch (error) {
			console.log(error);
		}
	})();
}

function createAlias(req, res) {
	(async (body) => {
		try {
			const data = await forwardemail('post', req.params.domain, body);
			if (data.statusCode == 404) {
				res.status(404).json(data);
			} else if (data.statusCode) {
				// if statusCode is defined it means there was an error
				res.status(500).json(data);
			} else {
				// no error
				const { name, domain, id, recipients, is_enabled } = data;
				res.status(200).json({ name, domain: domain.name, id, recipients, is_enabled });
			}
			
		} catch (error) {
			console.log(error);
		}
	})(req.body);
}

const filterData = (data) => {
	let aliases = [];
	data.forEach(( { name, domain, id, recipients, is_enabled} ) => {
		aliases = [...aliases, { name, domain: domain.name, id, recipients, is_enabled } ];
	});
	return aliases;
}

module.exports = {
	getAlias,
	checkBody,
	createAlias,
};