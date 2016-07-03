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
  .factory('FatesCharacter', FatesCharacterFactory)
  .service('fatesRole', fatesRoleService)
  .service('fatesSkill', fatesSkillService)
  ;

// TODO: TESTING ALL THE THINGS

fatesService.$inject = ['fatesCharacters', 'fatesRoles', 'FatesCharacter', 'fatesRole'];
FatesCharacterFactory.$inject = ['fatesCharacters'];
// fatesRole.$inject = ['fatesRoles'];

function fatesService(fatesCharacters, fatesRoles, FatesCharacter, fatesRole) {
  // Service logic
  // ...

  var characters = fatesCharacters;
  var roles = fatesRoles;

  // Public API here
  return {
    listCharacters: listCharacters,
    getCharacter: getCharacter,
    getRole: getRole,
    getSupportRole: getSupportRole,
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
    return FatesCharacter.getNew(characterName);
  }

  function getRole(roleName) {
    var role = roles[roleName];
    return new fatesRole.set(role);
  }

  function getSupportRole(character, supporter) {
    // TODO: this is getting called twice each time, and idk why
    // Most of this will go in role service
    var specialRoles = ['Nohr Prince(ss)', 'Songstress', 'Villager', 'Kitsune', 'Wolfskin'];
    var roleParallels = {
      'Nohr Prince(ss)': null,
      'Cavalier': 'Ninja',
      'Knight': 'Spear Fighter',
      'Fighter': 'Oni Savage',
      'Mercenary': 'Samurai',
      'Outlaw': 'Archer',
      'Samurai': 'Mercenary',
      'Oni Savage': 'Fighter',
      'Spear Fighter': 'Knight',
      'Diviner': 'Dark Mage',
      'Monk/Shrine Maiden': null,
      'Sky Knight': 'Wyvern Rider',
      'Archer': 'Outlaw',
      'Wyvern Rider': 'Sky Knight',
      'Ninja': 'Cavalier',
      'Apothecary': null,
      'Dark Mage': 'Diviner',
      'Troubadour': null,
      'Wolfskin': 'Outlaw',
      'Kitsune': 'Apothecary',
      'Songstress': 'Troubadour',
      'Villager': 'Apothecary',
    };
    //

    var characterRole = character.baseRole();
    var supporterRole = supporter.baseRole();
    var supportRole = supporterRole; // first choice

    if (supporterRole === characterRole ||
        specialRoles.indexOf(supporterRole) != -1) {

      // Get second role
      var secondRole = supporter.roles[1];
      supportRole = secondRole; // second choice

      if (!secondRole ||
          secondRole === characterRole ||
          specialRoles.indexOf(secondRole) != -1) {

        // Get parallel role
        var parallelRole = roleParallels[supporterRole];
        supportRole = parallelRole; // parallel choice

      }
    }

    // Return null if character already has role
    return (character.roles.indexOf(supportRole) === -1) ? supportRole : null;
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

function FatesCharacterFactory(fatesCharacters) {

  // Constructor

  function FatesCharacter(name, sex, friends, partners, roles, spawnedBy) {
    this.name = name;
    this.sex = sex;
    this.friends = friends;
    this.partners = partners;
    this.roles = roles;
    this.spawnedBy = spawnedBy;
  }

  // Instance methods (w/ prototype)

  FatesCharacter.prototype.baseRole = baseRole;
  FatesCharacter.prototype.isChild = isChild;
  FatesCharacter.prototype.setSupport = setSupport;

  // Class/static methods

  FatesCharacter.getData = getData;
  FatesCharacter.getNew = getNew;
  FatesCharacter.fromData = fromData;

  // Return constructor

  return FatesCharacter;

  // Instance method definitions

  function baseRole() {
    return this.roles[0];
  }

  function isChild() {
    return !!this.spawnedBy;
  }

  function setSupport(characterName, supportType) {
    this[supportType] = FatesCharacter.getNew(characterName);
  }

  // Class/static method definitions

  function getData(characterName) {
    return fatesCharacters[characterName];
  }

  function getNew(characterName) {
    var character = FatesCharacter.getData(characterName);
    return FatesCharacter.fromData(character);
  }

  function fromData(characterData) {
    return new FatesCharacter(
      characterData.name,
      characterData.sex,
      characterData.friends,
      characterData.partners,
      characterData.roles,
      characterData.spawnedBy
    );
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
