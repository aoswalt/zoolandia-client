angular.module('Zoolandia')
  .controller('LandingCtrl', function($http) {
    const landing = this
    landing.title = 'Landing Page'

    $http.get('http://localhost:8000')
      .catch(err => console.error(err))
      .then(res => landing.apiRoot = res.data)
  })
