const aguid = require('aguid');
const stringify = require('fast-stable-stringify');

module.exports = {
		run: function run(value) {
		if (typeof value !== 'string') {
			value = stringify(value);
		}
		return aguid(value);
	}
}


