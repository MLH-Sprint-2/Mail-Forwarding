
function getDomains(req, res) {
    const domains = ["hash.fyi", "hideaddress.net", "mailsire.com", "secret.fyi"]
    res.status(200).json({
        domains
    });
}



module.exports = {
	getDomains,
};
