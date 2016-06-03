//Use module exports to expose middleware variable

	var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private Route Hit!');
		next();
	},
	logger: function (req, res, next) {
	    var date = new Date().toString()
		console.log('Request ' + date + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

module.exports = middleware;
