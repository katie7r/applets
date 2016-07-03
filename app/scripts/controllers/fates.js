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
  vm.getSupportRole = getSupportRole;
  // vm.setCharacterSupport = setCharacterSupport;
  vm.characterList = fatesService.listCharacters();

  function setCharacter(characterName) {
    vm.character = fatesService.getCharacter(characterName);
  }

  function getSupportRole(supporter) {
    return fatesService.getSupportRole(vm.character, supporter);
  }

  // function setCharacterSupport(characterName, support) {
  //   vm.characterSupport[support] = fatesService.getCharacter(characterName);
  // }



};
