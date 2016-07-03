'use strict';

describe('Controller: MendelCtrl', function () {

  // load the controller's module
  beforeEach(module('appletsApp'));

  var MendelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MendelCtrl = $controller('MendelCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MendelCtrl.awesomeThings.length).toBe(3);
  });
});
