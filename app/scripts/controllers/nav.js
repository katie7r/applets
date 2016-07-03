'use strict';

/**
 * @ngdoc function
 * @name appletsApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the appletsApp
 */
angular.module('appletsApp')
  .controller('NavCtrl', NavCtrl);

NavCtrl.$inject = ['$location'];

function NavCtrl($location) {
  var vm = this;

  vm.isActive = isActive;

  function isActive(viewLocation) {
    return viewLocation === $location.path();
  }

}
