'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('appletsApp'));

  var ctrl,
      $location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$location_) {
    $location = _$location_;
    ctrl = $controller('NavCtrl', {
      // place here mocked dependencies
    });
  }));


  it('.isActive should check if the path is active', function() {
    $location.path('/about');
    expect($location.path()).toBe('/about');
    expect(ctrl.isActive('/about')).toBe(true);
    expect(ctrl.isActive('/contact')).toBe(false);
  });
});
