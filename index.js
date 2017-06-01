const Rusha = require('rusha');
const stringify = require('fast-stable-stringify');

const rusha = new Rusha();

module.exports = function (value) {
	if (typeof value !== 'string') {
		value = stringify(value);
	}
	return rusha.digest(value);
}



