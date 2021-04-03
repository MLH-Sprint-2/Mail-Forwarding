
function getDomains(req, res) {
    const domains = ["swiftmegaminds.tech", "hash.fyi", "hideaddress.net", "mailsire.com", "secret.fyi"]
    res.status(200).json({
        domains
    });
}



module.exports = {
	getDomains,
};
