angular.module('Zoolandia')
  .config(($routeProvider) => {
    $routeProvider
      .when('/', {
        controller: 'LandingCtrl',
        controllerAs: 'landing',
        templateUrl: 'app/landing/landing.html',
      })
  })
