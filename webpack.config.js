switch(process.env.MODE){
	case "prod":
		module.exports = require('./config/webpack.prod.js');
		break;
	case "dev":
		module.exports = require('./config/webpack.dev.js');
		break;
	default:
		module.exports = require('./config/webpack.dev.js');
};
