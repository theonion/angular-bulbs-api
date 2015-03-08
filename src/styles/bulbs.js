'use strict';

angular.module('restmod').factory('BulbsApi', ['restmod', 'inflector', function(restmod, inflector) {

	return restmod.mixin('DefaultPacker', { // include default packer extension
		$config: {
			style: 'Bulbs',
			primaryKey: 'id',
		},

		$extend: {
			// special snakecase to camelcase renaming
			Model: {
				decodeName: inflector.camelize,
				encodeName: function(_v) { return inflector.parameterize(_v, '_'); },
				encodeUrlName: inflector.parameterize
			}
		},
	});

}]);