var all = require('when/keys').all;

var fetchData = module.exports = (token, props) => {

	return all(props.components.filter((prop) => {
		return prop.fetchData;
	}).reduce((promises, prop) => {
		promises[props.routes[0].path] = prop.fetchData(token, {}, {});
		return promises;
	}, {}));
};