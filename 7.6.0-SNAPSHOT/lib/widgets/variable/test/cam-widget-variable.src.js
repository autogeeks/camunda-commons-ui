'use strict';

var angular = require('camunda-bpm-sdk-js/vendor/angular'),
    variableDefinition = require('../cam-widget-variable'),
    variableValidator = require('../cam-variable-validator');

require('../../../../vendor/ui-bootstrap-tpls-0.11.2-camunda');

var variableModule = angular.module('variableModule', [
  'ui.bootstrap'
]);

variableModule.directive('camWidgetVariable', variableDefinition);
variableModule.directive('camVariableValidator', variableValidator);


var testModule = angular.module('testModule', [variableModule.name]);
var vars = [
  {
    name:   null,
    type:   null
  },
  {
    name:   'booleanVar',
    type:   'Boolean',
    value:  true
  },
  {
    name:   'dateVar',
    type:   'Date',
    value:  '2015-03-23T13:14:06.340Z'
  },
  {
    name:   'doubleVar',
    type:   'Double',
    value:  '12.34'
  },
  {
    name:   'integerVar',
    type:   'Integer',
    value:  '1000'
  },
  {
    name:   'longVar',
    type:   'Long',
    value:  '-100000000'
  },
  {
    name:   'nullVar',
    type:   'Null',
    value:  null
  },
  {
    name:   'objectVar',
    type:   'Object',
    value:  'rO0ABXNyACpvcmcuY2FtdW5kYS5icG0ucGEuc2VydmljZS5Db2NrcGl0VmFyaWFibGUAAAAAAAAAAQIAA0wABWRhdGVzdAAQTGphdmEvdXRpbC9MaXN0O0wABG5hbWV0ABJMamF2YS9sYW5nL1N0cmluZztMAAV2YWx1ZXEAfgACeHBzcgATamF2YS51dGlsLkFycmF5TGlzdHiB0h2Zx2GdAwABSQAEc2l6ZXhwAAAAAXcEAAAAAXNyAA5qYXZhLnV0aWwuRGF0ZWhqgQFLWXQZAwAAeHB3CAAAAUyieV6meHh0AAR0ZXN0dAAUY29ja3BpdFZhcmlhYmxlVmFsdWU',
    valueInfo: {
      objectTypeName: 'org.camunda.bpm.pa.service.CockpitVariable',
      serializationDataFormat: 'application/x-java-serialized-object'
    }
  },
  {
    name:   'shortVar',
    type:   'Short',
    value:  '-32768'
  },
  {
    name:   'stringVar',
    type:   'String',
    value:  'Some string value'
  }
];

testModule.controller('example1Controller', ['$scope', function($scope) {
  $scope.vars = vars;
}]);

testModule.controller('example2Controller', ['$scope', function($scope) {
  $scope.vars = vars;
}]);

testModule.controller('example3Controller', ['$scope', function($scope) {
  $scope.nameValue =  ['name', 'value'];
  $scope.typeValue =  ['type', 'value'];
  $scope.typeName =   ['type', 'name'];
  $scope.vars = vars;
}]);

angular.element(document).ready(function() {
  angular.bootstrap(document.body, [testModule.name]);
});
