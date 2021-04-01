const fetch = require('node-fetch');
const btoa = require('btoa');
require('dotenv').config();

async function forwardemail(method, domain, body = '', ) {
	try {
		const response = await fetch(
			`https://api.forwardemail.net/v1/domains/${domain}/aliases`,
			{
				headers: {
					method,
					Authorization: 'Basic ' + btoa(process.env.KEY+':'),
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
