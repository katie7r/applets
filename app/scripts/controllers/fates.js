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
  vm.getCharacter = getCharacter;
  vm.setCharacter = setCharacter;
  vm.getSupportRole = getSupportRole;
  // vm.setCharacterSupport = setCharacterSupport;
  vm.characterList = fatesService.listCharacters();

  function getCharacter(characterName) {
    return fatesService.getCharacter(characterName)
  }

  function setCharacter(characterName) {
    vm.character = vm.getCharacter(characterName);
  }

  function getSupportRole(supporter) {
    return fatesService.getSupportRole(vm.character, supporter);
  }

  // function setCharacterSupport(characterName, support) {
  //   vm.characterSupport[support] = fatesService.getCharacter(characterName);
  // }



};
