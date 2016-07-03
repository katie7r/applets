'use strict';

describe('Controller: TitleizeCtrl', function () {

  // load the controller's module
  beforeEach(module('appletsApp'));

  var TitleizeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TitleizeCtrl = $controller('TitleizeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TitleizeCtrl.awesomeThings.length).toBe(3);
  });
});
