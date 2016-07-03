'use strict';

/**
 * @ngdoc service
 * @name appletsApp.fates
 * @description
 * # fates
 * Factory in the appletsApp.
 */
angular.module('appletsApp')
  .factory('fatesService', fatesService)
  .service('fatesCharacter', fatesCharacterService)
  .service('fatesRole', fatesRoleService)
  .service('fatesSkill', fatesSkillService)
  ;

// TODO: TESTING ALL THE THINGS

fatesService.$inject = ['fatesCharacters', 'fatesRoles', 'fatesCharacter', 'fatesRole'];

// function fatesService(fatesCharacters, fatesRoles, fatesSkills, fatesCharacter, fatesRole, fatesSkill) {
function fatesService(fatesCharacters, fatesRoles, fatesCharacter, fatesRole) {
  // Service logic
  // ...

  var character = {};
  var characters = fatesCharacters;
  var roles = fatesRoles;

  // Public API here
  return {
    listCharacters: listCharacters,
    getCharacter: getCharacter,
    getRole: getRole,
    getRolesForCharacter: getRolesForCharacter,
    getSkillsForCharacter: getSkillsForCharacter,
    getSkillsForRole: getSkillsForRole,
  };

  // ---------- Getting things

  function listCharacters() {
    var charList = [];
    angular.forEach(characters, function(char, charName) {
      charList.push(charName);
    });
    return charList;
  }

  function getCharacter(characterName) {
    var character = new fatesCharacter.set(characters[characterName]);
    return character;
  }

  function getRole(roleName) {
    var role = roles[roleName];
    return new fatesRole.set(role);
  }

  // ---------- Multi-service (?)

  function getRolesForCharacter(character) {
    // for role in character.roles: getRolePromotions
    return 'roles+promotions for ' + character;
  }

  function getSkillsForCharacter(character) {
    // for role in getRolesForCharacter(character): getSkillsForRole
    return 'skills for ' + character;
  }

  function getSkillsForRole(role) {
    // for skill in role.skills: get skills[skill]
    return 'skills for ' + role;
  }
};

function fatesCharacterService() {
  var character = this;

  character.set = set;
  character.baseRole = baseRole;
  character.isChild = isChild;

  function set(characterDetails) {
    // name, sex, friends, partners, roles
    angular.forEach(characterDetails, function(value, attr) {
      character[attr] = value; // validate?
    });
    return character;
  }

  function baseRole() {
    return character.roles[0];
  }

  function isChild() {
    character.spawnedBy && character.spawnedBy.length;
  }

};

function fatesRoleService() {
  var role = this;

  role.set = set;
  role.getParallel = getParallel;
  role.getPromotions = getPromotions;
  // role.mapLevel = mapLevel;

  function set(roleDetails) {
    // name, level, weapons, skills, promotesTo //, promotesFrom ?
    angular.forEach(roleDetails, function(value, attr) {
      role[attr] = value; // validate?
    });
  }

  function getParallel() {
    // PARALLEL CLASSES
    return role;
  }

  function getPromotions() {
    // for pro in role.promotesTo: role(pro)
    return 'promotions for ' + role.name;
  }

  function mapLevel() {
    // BASIC/ADVANCED/SPECIAL
    return role.level;
  }

};

function fatesSkillService() {
  var skill = this;

  skill.set = set;

  function set(skillDetails) {
    // name, ... ?
    angular.forEach(skillDetails, function(value, attr) {
      skill[attr] = value; // validate?
    });
  }

};

// characters = {};
// roles = {};
// skills = {};
