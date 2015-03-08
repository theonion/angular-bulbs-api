angular.module('bulbsApi').filter('iso_date_parse', function () {
  return function(input) {
    date = new Date();
    date.setTime(Date.parse(input));
    return date;
  };
})