const fetch = require('node-fetch');
const btoa = require('btoa');
require('dotenv').config();

async function forwardemail(method, domain, body) {
	try {		
		const response = await fetch(
			`https://api.forwardemail.net/v1/domains/${domain}/aliases`,
			{
				method: method,
				headers: {
					Authorization: 'Basic ' + btoa(process.env.KEY+':'),
					'Content-Type': 'application/json',
				},
				...(body) && {body: JSON.stringify(body)},
			}
		);
		const json = await response.json();
		return json;
	} catch (error) {
		console.error("error: ", error);
	}
}
exports.forwardemail = forwardemail;