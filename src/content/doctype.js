'use strict';

angular.module('bulbsApi').factory('DocType', function(restmod){
	return restmod.model('/doctype/').mix('TokenAuth');
});