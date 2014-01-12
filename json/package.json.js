
/**
 * 
 * @param  {[type]} scope [description]
 * @return {[type]}       [description]
 */
module.exports = function dataForPackageJSON (scope) {

	var sails = scope.sails;

	// Override sails version temporarily
	var sailsVersionDependency = '~' + sails.version;
	sailsVersionDependency = 'git://github.com/balderdashy/sails.git#v0.10';

	return {
		name: scope.appName,
		'private': true,
		version: '0.0.0',
		description: 'a Sails application',
		dependencies: {
			'sails'			: sailsVersionDependency,
			'sails-disk'	: sails.dependencies['sails-disk'],
			'ejs'			: sails.dependencies['ejs'],
			'grunt'			: sails.dependencies['grunt']
		},
		scripts: {
			// TODO: Include this later when we have "sails test" ready.
			// test: './node_modules/mocha/bin/mocha -b',
			start: 'node app.js',
			debug: 'node debug app.js'
		},
		main: 'app.js',
		repository: '',
		author: scope.author,
		license: ''
	};
};
