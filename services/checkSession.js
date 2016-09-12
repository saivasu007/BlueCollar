angular.module('blueCollarApp').factory('checkSession', function ($rootScope, $http) {
    var fac = {};
    fac.check = function () {
        $http.get('/loggedin').success(function (user) {
            $rootScope.isLoggedIn = (user != 0);
        });
    };
    return fac;
});