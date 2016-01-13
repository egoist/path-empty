var fs = require('fs')
var Promise = require('pinkie-promise')

module.exports = function (dir) {
	return new Promise(function (resolve, reject) {
		fs.readdir(dir, function (err, files) {
			if (err) {
				return reject(new Error(err))
			}
			resolve(files.length === 0)
		})
	})
}

module.exports.sync = function (dir) {
	return fs.readdirSync(dir).length === 0
}
