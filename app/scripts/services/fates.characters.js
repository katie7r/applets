'use strict';

/**
 * @ngdoc service
 * @name appletsApp.fatesCharacters
 * @description
 * # fatesCharacters
 * Constant in the appletsApp.
 */
angular.module('appletsApp')
  .constant('fatesCharacters', {
    // 'Avatar': {
    //   name: 'Corrin',
    //   roles: ['Nohr Prince(ss)']
    // },
    'Azura': {
      name: 'Azura',
      sex: 0,
      friends: ['Hinoka', 'Sakura', 'Elise'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Ryoma', 'Takumi', 'Saizo', 'Kaden', 'Hinata', 'Azama', 'Subaki', 'Hayato', 'Xander', 'Leo', 'Benny', 'Keaton', 'Arthur', 'Odin', 'Laslow', 'Niles'],
      roles: ['Songstress', 'Sky Knight']
    },
    'Gunter': {
      name: 'Gunter',
      sex: 1,
      friends: ['Jakob'],
      partners: [],
      roles: ['Cavalier',	'Mercenary',	'Wyvern Rider']
    },
    'Felicia': {
      name: 'Felicia',
      sex: 0,
      friends: ['Hana', 'Peri', 'Flora'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Ryoma', 'Takumi', 'Saizo', 'Kaden', 'Hinata', 'Azama', 'Subaki', 'Hayato', 'Xander', 'Leo', 'Benny', 'Keaton', 'Arthur', 'Odin', 'Laslow', 'Niles'],
      roles: ['Troubadour', 'Mercenary']
    },
    'Jakob': {
      name: 'Jakob',
      sex: 1,
      friends: ['Gunter', 'Silas', 'Takumi'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Hinoka', 'Sakura', 'Rinkah', 'Orochi', 'Kagero', 'Hana', 'Setsuna', 'Oboro', 'Camilla', 'Elise', 'Charlotte', 'Effie', 'Peri', 'Beruka', 'Selena', 'Nyx'],
      roles: ['Troubadour', 'Cavalier']
    },
    'Kaze': {
      name: 'Kaze',
      sex: 1,
      friends: ['Saizou', 'Silas', 'Xander'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Hinoka', 'Sakura', 'Rinkah', 'Orochi', 'Kagero', 'Hana', 'Setsuna', 'Oboro', 'Camilla', 'Elise', 'Charlotte', 'Effie', 'Peri', 'Beruka', 'Selena', 'Nyx'],
      roles: ['Ninja', 'Samurai']
    },
    'Silas': {
      name: 'Silas',
      sex: 1,
      friends: ['Ryoma', 'Jakob', 'Kaze'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Hinoka', 'Sakura', 'Rinkah', 'Orochi', 'Kagero', 'Hana', 'Setsuna', 'Oboro', 'Camilla', 'Elise', 'Charlotte', 'Effie', 'Peri', 'Beruka', 'Selena', 'Nyx'],
      roles: ['Cavalier', 'Mercenary']
    },
    'Shura': {
      name: 'Shura',
      sex: 1,
      friends: [],
      partners: [],
      roles: ['Outlaw', 'Ninja', 'Fighter']
    },
    'Izana': {
      name: 'Izana',
      sex: 1,
      friends: [],
      partners: [],
      roles: ['Monk/Shrine Maiden', 'Samurai', 'Apothecary']
    },
    'Mozu': {
      name: 'Mozu',
      sex: 0,
      friends: ['Oboro', 'Effie', 'Nyx'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Ryoma', 'Takumi', 'Saizo', 'Kaden', 'Hinata', 'Azama', 'Subaki', 'Hayato', 'Xander', 'Leo', 'Benny', 'Keaton', 'Arthur', 'Odin', 'Laslow', 'Niles'],
      roles: ['Villager', 'Archer']
    },
    'Fuga': {
      name: 'Fuga',
      sex: 1,
      friends: ['Hayato'],
      partners: [],
      roles: ['Samurai', 'Oni Savage', 'Monk/Shrine Maiden']
    },
    'Anna': {
      name: 'Anna',
      sex: 0,
      friends: [],
      partners: [],
      roles: ['Outlaw', 'Troubadour', 'Apothecary']
    },
    'Rinkah': {
      name: 'Rinkah',
      sex: 0,
      friends: ['Orochi', 'Kagero', 'Oboro', 'Charlotte'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Ryoma', 'Takumi', 'Saizo', 'Kaden', 'Hinata', 'Azama', 'Subaki', 'Hayato', 'Benny', 'Keaton'],
      roles: ['Oni Savage', 'Ninja']
    },
    'Sakura': {
      name: 'Sakura',
      sex: 0,
      friends: ['Hinoka', 'Hana', 'Azura', 'Elise'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Saizo', 'Kaden', 'Hinata', 'Azama', 'Subaki', 'Hayato', 'Xander', 'Leo'],
      roles: ['Monk/Shrine Maiden', 'Sky Knight']
    },
    'Hana': {
      name: 'Hana',
      sex: 0,
      friends: ['Sakura', 'Setsuna', 'Effie'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Ryoma', 'Takumi', 'Saizo', 'Kaden', 'Hinata', 'Azama', 'Subaki', 'Hayato', 'Laslow', 'Keaton'],
      roles: ['Samurai', 'Monk/Shrine Maiden']
    },
    'Subaki': {
      name: 'Subaki',
      sex: 1,
      friends: ['Azama', 'Saizou', 'Hinata', 'Niles'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Hinoka', 'Sakura', 'Rinkah', 'Orochi', 'Kagero', 'Hana', 'Setsuna', 'Oboro', 'Selena', 'Nyx'],
      roles: ['Sky Knight', 'Samurai']
    },
    'Saizo': {
      name: 'Saizo',
      sex: 1,
      friends: ['Ryoma', 'Subaki', 'Kaze', 'Laslow'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Hinoka', 'Sakura', 'Rinkah', 'Orochi', 'Kagero', 'Hana', 'Setsuna', 'Oboro', 'Charlotte', 'Beruka'],
      roles: ['Ninja', 'Samurai']
    },
    'Orochi': {
      name: 'Orochi',
      sex: 0,
      friends: ['Rinkah', 'Kagero', 'Oboro', 'Nyx'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Ryoma', 'Takumi', 'Saizo', 'Kaden', 'Hinata', 'Azama', 'Subaki', 'Hayato', 'Laslow', 'Odin'],
      roles: ['Diviner', 'Apothecary']
    },
    'Hinoka': {
      name: 'Hinoka',
      sex: 0,
      friends: ['Sakura', 'Setsuna', 'Azura', 'Camilla'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Saizo', 'Kaden', 'Hinata', 'Azama', 'Subaki', 'Hayato', 'Xander', 'Leo'],
      roles: ['Sky Knight', 'Spear Fighter']
    },
    'Azama': {
      name: 'Azama',
      sex: 1,
      friends: ['Kaden', 'Subaki', 'Hayato', 'Arthur'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Hinoka', 'Sakura', 'Rinkah', 'Orochi', 'Kagero', 'Hana', 'Setsuna', 'Oboro', 'Effie', 'Beruka'],
      roles: ['Monk/Shrine Maiden', 'Apothecary']
    },
    'Setsuna': {
      name: 'Setsuna',
      sex: 0,
      friends: ['Hinoka', 'Kagero', 'Hana', 'Selena'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Ryoma', 'Takumi', 'Saizo', 'Kaden', 'Hinata', 'Azama', 'Subaki', 'Hayato', 'Niles', 'Arthur'],
      roles: ['Archer', 'Ninja']
    },
    'Hayato': {
      name: 'Hayato',
      sex: 1,
      friends: ['Kaden', 'Azama', 'Benny', 'Fuga'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Hinoka', 'Sakura', 'Rinkah', 'Orochi', 'Kagero', 'Hana', 'Setsuna', 'Oboro', 'Effie', 'Nyx'],
      roles: ['Diviner', 'Oni Savage']
    },
    'Oboro': {
      name: 'Oboro',
      sex: 0,
      friends: ['Orochi', 'Rinkah', 'Mozu', 'Beruka'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Ryoma', 'Takumi', 'Saizo', 'Kaden', 'Hinata', 'Azama', 'Subaki', 'Hayato', 'Benny', 'Niles'],
      roles: ['Spear Fighter', 'Apothecary']
    },
    'Hinata': {
      name: 'Hinata',
      sex: 1,
      friends: ['Takumi', 'Kaden', 'Subaki', 'Odin'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Hinoka', 'Sakura', 'Rinkah', 'Orochi', 'Kagero', 'Hana', 'Setsuna', 'Oboro', 'Peri', 'Selena'],
      roles: ['Samurai', 'Oni Savage']
    },
    'Takumi': {
      name: 'Takumi',
      sex: 1,
      friends: ['Ryoma', 'Hinata', 'Jakob', 'Leo'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Rinkah', 'Orochi', 'Kagero', 'Hana', 'Setsuna', 'Oboro', 'Camilla', 'Elise'],
      roles: ['Archer', 'Spear Fighter']
    },
    'Kagero': {
      name: 'Kagero',
      sex: 0,
      friends: ['Orochi', 'Rinkah', 'Setsuna', 'Peri'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Ryoma', 'Takumi', 'Saizo', 'Kaden', 'Hinata', 'Azama', 'Subaki', 'Hayato', 'Odin', 'Arthur'],
      roles: ['Ninja', 'Diviner']
    },
    'Reina': {
      name: 'Reina',
      sex: 0,
      friends: [],
      partners: [],
      roles: ['Sky Knight', 'Diviner', 'Ninja']
    },
    'Kaden': {
      name: 'Kaden',
      sex: 1,
      friends: ['Hinata', 'Azama', 'Hayato', 'Keaton'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Hinoka', 'Sakura', 'Rinkah', 'Orochi', 'Kagero', 'Hana', 'Setsuna', 'Oboro', 'Charlotte', 'Peri'],
      roles: ['Kitsune', 'Diviner']
    },
    'Ryoma': {
      name: 'Ryoma',
      sex: 1,
      friends: ['Saizo', 'Silas', 'Takumi', 'Xander'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Rinkah', 'Orochi', 'Kagero', 'Hana', 'Setsuna', 'Oboro', 'Camilla', 'Elise'],
      roles: ['Samurai', 'Sky Knight']
    },
    'Scarlet': {
      name: 'Scarlet',
      sex: 0,
      friends: [],
      partners: [],
      roles: ['Wyvern Rider', 'Outlaw', 'Knight']
    },
    'Yukimura': {
      name: 'Yukimura',
      sex: 1,
      friends: [],
      partners: [],
      roles: ['Apothecary', 'Samurai', 'Monk/Shrine Maiden']
    },
    'Elise': {
      name: 'Elise',
      sex: 0,
      friends: ['Camilla', 'Azura', 'Effie', 'Sakura'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Benny', 'Keaton', 'Arthur', 'Odin', 'Laslow', 'Niles', 'Ryoma', 'Takumi'],
      roles: ['Troubadour', 'Wyvern Rider']
    },
    'Arthur': {
      name: 'Arthur',
      sex: 1,
      friends: ['Benny', 'Keaton', 'Niles', 'Azama'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Camilla', 'Elise', 'Charlotte', 'Effie', 'Peri', 'Beruka', 'Selena', 'Nyx', 'Kagero', 'Setsuna'],
      roles: ['Fighter', 'Cavalier']
    },
    'Effie': {
      name: 'Effie',
      sex: 0,
      friends: ['Elise', 'Mozu', 'Nyx', 'Hana'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Xander', 'Leo', 'Benny', 'Keaton', 'Arthur', 'Odin', 'Laslow', 'Niles', 'Hayato', 'Azama'],
      roles: ['Knight', 'Troubadour']
    },
    'Odin': {
      name: 'Odin',
      sex: 1,
      friends: ['Leo', 'Laslow', 'Niles', 'Hinata'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Camilla', 'Elise', 'Charlotte', 'Effie', 'Peri', 'Beruka', 'Selena', 'Nyx', 'Orochi', 'Kagero'],
      roles: ['Dark Mage', 'Samurai']
    },
    'Niles': {
      name: 'Niles',
      sex: 1,
      friends: ['Leo', 'Odin', 'Arthur', 'Subaki'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Camilla', 'Elise', 'Charlotte', 'Effie', 'Peri', 'Beruka', 'Selena', 'Nyx', 'Setsuna', 'Oboro'],
      roles: ['Outlaw', 'Dark Mage']
    },
    'Nyx': {
      name: 'Nyx',
      sex: 0,
      friends: ['Mozu', 'Charlotte', 'Effie', 'Orochi'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Xander', 'Leo', 'Benny', 'Keaton', 'Arthur', 'Odin', 'Laslow', 'Niles', 'Hayato', 'Subaki'],
      roles: ['Dark Mage', 'Outlaw']
    },
    'Camilla': {
      name: 'Camilla',
      sex: 0,
      friends: ['Elise', 'Beruka', 'Selena', 'Hinoka'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Benny', 'Keaton', 'Arthur', 'Odin', 'Laslow', 'Niles', 'Ryoma', 'Takumi'],
      roles: ['Wyvern Rider', 'Dark Mage']
    },
    'Selena': {
      name: 'Selena',
      sex: 0,
      friends: ['Camilla', 'Beruka', 'Peri', 'Setsuna'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Xander', 'Leo', 'Benny', 'Keaton', 'Arthur', 'Odin', 'Laslow', 'Niles', 'Subaki', 'Hinata'],
      roles: ['Mercenary', 'Sky Knight']
    },
    'Beruka': {
      name: 'Beruka',
      sex: 0,
      friends: ['Camilla', 'Charlotte', 'Selena', 'Oboro'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Xander', 'Leo', 'Benny', 'Keaton', 'Arthur', 'Odin', 'Laslow', 'Niles', 'Azama', 'Saizo'],
      roles: ['Wyvern Rider', 'Fighter']
    },
    'Laslow': {
      name: 'Laslow',
      sex: 1,
      friends: ['Xander', 'Odin', 'Keaton', 'Saizo'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Camilla', 'Elise', 'Charlotte', 'Effie', 'Peri', 'Beruka', 'Selena', 'Nyx', 'Orochi', 'Hana'],
      roles: ['Mercenary', 'Ninja']
    },
    'Peri': {
      name: 'Peri',
      sex: 0,
      friends: ['Felicia', 'Charlotte', 'Selena', 'Kagero'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Xander', 'Leo', 'Benny', 'Keaton', 'Arthur', 'Odin', 'Laslow', 'Niles', 'Hinata', 'Kaden'],
      roles: ['Cavalier', 'Dark Mage']
    },
    'Benny': {
      name: 'Benny',
      sex: 1,
      friends: ['Keaton', 'Arthur', 'Hayato'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Camilla', 'Elise', 'Charlotte', 'Effie', 'Peri', 'Beruka', 'Selena', 'Nyx', 'Rinkah', 'Oboro'],
      roles: ['Knight', 'Fighter']
    },
    'Charlotte': {
      name: 'Charlotte',
      sex: 0,
      friends: ['Peri', 'Beruka', 'Nyx', 'Rinkah'],
      partners: ['Jakob', 'Silas', 'Kaze', 'Xander', 'Leo', 'Benny', 'Keaton', 'Arthur', 'Odin', 'Laslow', 'Niles', 'Saizo', 'Kaden'],
      roles: ['Fighter', 'Troubadour']
    },
    'Leo': {
      name: 'Leo',
      sex: 1,
      friends: ['Xander', 'Odin', 'Niles', 'Takumi'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Charlotte', 'Effie', 'Peri', 'Beruka', 'Selena', 'Nyx', 'Hinoka', 'Sakura'],
      roles: ['Dark Mage', 'Troubadour']
    },
    'Keaton': {
      name: 'Keaton',
      sex: 1,
      friends: ['Benny', 'Arthur', 'Laslow', 'Kaden'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Camilla', 'Elise', 'Charlotte', 'Effie', 'Peri', 'Beruka', 'Selena', 'Nyx', 'Rinkah', 'Hana'],
      roles: ['Wolfskin', 'Fighter']
    },
    'Xander': {
      name: 'Xander',
      sex: 1,
      friends: ['Kaze', 'Laslow', 'Leo', 'Ryoma'],
      partners: ['Felicia', 'Azura', 'Mozu', 'Charlotte', 'Effie', 'Peri', 'Beruka', 'Selena', 'Nyx', 'Hinoka', 'Sakura'],
      roles: ['Cavalier', 'Wyvern Rider']
    },
    'Flora': {
      name: 'Flora',
      sex: 0,
      friends: ['Felicia'],
      partners: [],
      roles: ['Troubadour', 'Dark Mage', 'Mercenary']
    }//,
  }
);
