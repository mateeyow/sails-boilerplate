angular
  .module('app')
  .controller 'SampleController', [
    '$scope'
    ($s) ->
      console.log 'hi'
  ]