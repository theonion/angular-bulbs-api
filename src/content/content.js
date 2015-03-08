'use strict';

angular.module('bulbsApi').factory('Content', function(restmod){
	return restmod.model('/content/').mix('TokenAuth', 'DebouncedModel', {
		tags: {belongsToMany: 'Tag'},
		authors: {belongsToMany: 'Author'},
		doctype: {mask: 'RU'},  // Only send dctype on create...
		published: {decode: 'iso_date_parse'},

		$extend: {
			Record: {
				trash: function() {
		      return this.$action(function() {
		        var url = this.$url('destroy');
		        url += '/trash/';
		        if(url)
		        {
		          var request = { method: 'POST', url: url };

		          this
		            .$dispatch('before-destroy', [request])
		            .$send(request, function(_response) {

		              // remove from scope
		              if(this.$scope.$remove) {
		                this.$scope.$remove(this);
		              }

		              this.$dispatch('after-destroy', [_response]);
		            }, function(_response) {
		              this.$dispatch('after-destroy-error', [_response]);
		            });
		        }
		        else
		        {
		          // If not yet bound, just remove from parent
		          if(this.$scope.$remove) this.$scope.$remove(this);
		        }
		      });
				}
			}
		}
	});
});