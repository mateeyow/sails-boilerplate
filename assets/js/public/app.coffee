angular.module('app', [
  'ngRoute'
  'ngResource'
  'ngMaterial'
  'ngMessages'
  'ngAnimate'
])
.config [
  '$routeProvider',
  '$locationProvider'
  ($routeProvider, $locationProvider) ->
    $locationProvider.html5Mode
      enabled     : true
      requireBase : false

    $routeProvider
    .when '/',
      template: JST['.tmp/public/templates/public/sample.html']()
      controller: 'SampleController'
]