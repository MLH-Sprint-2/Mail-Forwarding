
function getDomains(req, res) {
    const domains = ["hash.fyi", "hideaddress.net", "mailsire.com", "secret.fyi"]
    res.status(200).json({
        status: data.statusCode,
        data: {
            data: domains,
        },
    });
}



module.exports = {
	getDomains,
};
