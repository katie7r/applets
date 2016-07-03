'use strict';

/**
 * @ngdoc service
 * @name appletsApp.fates
 * @description
 * # fates
 * Factory in the appletsApp.
 */
angular.module('appletsApp')
  .factory('fatesFactory', fatesFactory)
  .service('fatesCharacter', fatesCharacterService)
  .service('fatesRole', fatesRoleService);

// TODO: TESTING ALL THE THINGS

fatesFactory.$inject = ['fatesCharacters', 'fatesRoles', 'fatesCharacter', 'fatesRole'];

function fatesFactory(fatesCharacters, fatesRoles, fatesCharacter, fatesRole) {
  // Service logic
  // ...
  var characters = fatesCharacters;
  var roles = fatesRoles;

  // Public API here
  return {
    mapSex: mapSex,
    mapLevel: mapLevel,
    parallelRole: parallelRole,
    getCharacter: getCharacter,
    getRole: getRole,
    getRolePromotions: getRolePromotions,
    getRolesForCharacter: getRolesForCharacter,
    getSkillsForCharacter: getSkillsForCharacter,
    getSkillsForRole: getSkillsForRole,
  };

  // ---------- Mappings

  function mapSex(val) {
    if (val === -1) {
      return 'M/F';
    } else {
      return (val === 0) ? 'F' : 'M';
    }
  }

  function mapLevel(roleLevel) {
    // BASIC/ADVANCED/SPECIAL
    return roleLevel;
  }

  function parallelRole(role) {
    // PARALLEL CLASSES
    return role;
  }

  // ---------- Getting things

  function getCharacter(characterName) {
    return characters[characterName];
  }

  function getRole(roleName) {
    return roles[roleName];
  }

  function getRolePromotions(role) {
    // for pro in role.promotesTo: role(pro)
    return 'promotions for ' + role;
  }

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


  character.baseRole = baseRole;
  character.isChild = isChild;

  function set(characterDetails) {
    // Should do a loop instead probably
    character.name = characterDetails.name;
    character.sex = characterDetails.sex;
    character.friends = characterDetails.friends;
    character.partners = characterDetails.partners;
    character.roles = characterDetails.roles;
    character.spawnedBy = characterDetails.parentName || null;
  }

  function baseRole() {
    return this.roles[0];
  }

  function isChild() {
    character.spawnedBy && character.spawnedBy.length;
  }
};

function fatesRoleService() {
  var role = this;

  function set(characterDetails) {
    // Should do a loop instead probably
    role.name = characterDetails.name;
    role.level = characterDetails.level;
    role.weapons = characterDetails.weapons;
    role.skills = characterDetails.skills;
    role.promotesTo = characterDetails.promotesTo || []; // ?
    // role.promotesFrom = []; // ?
  }


};

// characters = {};
// roles = {};
// skills = {};
