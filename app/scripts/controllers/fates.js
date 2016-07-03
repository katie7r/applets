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

FatesCtrl.$inject = ['fatesService'];

function FatesCtrl(fatesService) {
  var vm = this;

  vm.character = {};
  // vm.characterSupport = {};
  vm.setCharacter = setCharacter;
  // vm.setCharacterSupport = setCharacterSupport;
  vm.characterList = fatesService.listCharacters();

  function setCharacter(characterName) {
    // vm.character = vm.characters[characterName];
    vm.character = fatesService.getCharacter(characterName);
  }

  // function setCharacterSupport(characterName, support) {
  //   vm.characterSupport[support] = fatesService.getCharacter(characterName);
  // }



};
