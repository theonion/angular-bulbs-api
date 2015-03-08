'use strict';

angular.module('bulbsApi').factory('TokenAuth', function(restmod) {
  var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Token notarealkey'
  };

  return restmod.mixin({
    $hooks: {
      'before-request': function(_req) {
        if (_req.headers) {
          _req.headers = angular.extend(_req.headers, headers);
        } else {
          _req.headers = headers;
        }
      },
      'before-fetch': function(_req) {
        _req.url += '/';
      },
      'before-save': function(_req) {
        _req.url += '/';
      }
    }
  });
});