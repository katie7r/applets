'use strict';

/**
 * @ngdoc function
 * @name appletsApp.controller:FatesCtrl
 * @description
 * # FatesCtrl
 * Controller of the appletsApp
 */
angular.module('appletsApp')
  .controller('FatesCtrl', FatesCtrl);

FatesCtrl.$inject = ['fatesFactory', 'fatesCharacters'];

function FatesCtrl(fatesFactory, fatesCharacters) {
  var vm = this;

  vm.characters = fatesCharacters;
  vm.character = {};
  vm.setCharacter = setCharacter;

  function setCharacter(characterName) {
    vm.character = vm.characters[characterName];
    // vm.character = fatesFactory.getCharacter(characterName);
  }



};
