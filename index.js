const fetch = require('node-fetch');
const btoa = require('btoa');

fetch('https://api.forwardemail.net/v1/domains/hideaddress.net/aliases', {
	headers: {
		Authorization: 'Basic ' + btoa('4559429186f1a9a6909700e8:'),
	},
})
	.then((res) => res.json())
	.then((json) => console.log(json));
