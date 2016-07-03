'use strict';

/**
 * @ngdoc filter
 * @name appletsApp.filter:fatesSexes
 * @function
 * @description
 * # fatesSexes
 * Filters in the appletsApp.
 */
angular.module('appletsApp')
  .filter('fatesSexes', fatesSexes);

function fatesSexes() {
  return function (input, option, optionValue) {
    // These should be two or three separate filters, but who cares

    if (option === 'role') {
      // Apply character's sex to role, if applicable
      if (input === 'Monk/Shrine Maiden') {
        return ['Shrine Maiden', 'Monk'][optionValue];

      } else if (input === 'Great Master/Priestess') {
        return ['Priestess', 'Great Master'][optionValue];

      } else if (input === 'Nohr Prince(ss)') {
        return ['Nohr Princess', 'Nohr Prince'][optionValue];

      } else {
        return input;
      }

    } else if (option === 'symbol') {
      // Get symbol for male/female
      return ['\u2640', '\u2642'][input];

    } else {
      // Nice name-ify character's sex
      if (input && input >= 0) {
        return (input === 0) ? 'Female' : 'Male';
      } else {
        return 'Male or Female';
      }
    }
  };
};
