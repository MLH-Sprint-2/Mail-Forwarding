const fetch = require('node-fetch');
const btoa = require('btoa');

async function forwardemail(method, body = '') {
	try {
		const response = await fetch(
			'https://api.forwardemail.net/v1/domains/hideaddress.net/aliases',
			{
				headers: {
					method,
					Authorization: 'Basic ' + btoa('4559429186f1a9a6909700e8:'),
					body: JSON.stringify(body),
					'Content-Type': 'application/json',
				},
			}
		);
		const json = await response.json();
		return json;
	} catch (error) {
		console.log(error.response);
	}
}
exports.forwardemail = forwardemail;
