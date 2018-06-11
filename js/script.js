var app = angular
    .module('computer', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'templates/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'templates/about.html',
                controller: 'MainCtrl'
            })
            .when('/services', {
                templateUrl: 'templates/services.html',
                controller: 'ServicesCtrl'
            })
            .when('/contact', {
                templateUrl: 'templates/contact.html',
                controller: 'ContactCtrl'
            })
            .otherwise({
                redirectTo: '/main'
            });
    }])
    .controller('MainCtrl', ['$scope', function ($scope) {
        console.log('Main controller');
    }])
    .controller('ServicesCtrl', ['$scope', '$http', function ($scope, $http) {
        $http
            .get('/json/services.json')
            .then(function (response) {
                $scope.services = response.data;
            });
    }])
    .controller('ContactCtrl', ['$scope', function ($scope) {
        console.log('Contact controller');
    }]);