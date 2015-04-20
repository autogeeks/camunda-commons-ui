/* jshint node: true, unused: false */
/* global __dirname: false, describe: false, before: false, it: false, browser: false,
          element: false, expect: false, by: false, protractor: false */
'use strict';

function Variable(node) {
  this.node = node;
}

Variable.prototype.editingGroup = function() {
  return this.node.element(by.css('.editing.input-group'));
};
Variable.prototype.editingGroupClass = function() {
  return this.editingGroup().getAttribute('class');
};

Variable.prototype.setNullBtn = function() {
  return this.editingGroup().element(by.css('.btn.set-null'));
};
Variable.prototype.setNonNullBtn = function() {
  return this.editingGroup().element(by.css('.btn.null-value'));
};

Variable.prototype.type = function() {
  return this.node.element(by.css('.type'));
};
Variable.prototype.typeDropdownText = function() {
  return this.type().element(by.css('.dropdown-toggle')).getText();
};
Variable.prototype.typeText = function() {
  return this.type().getText();
};
Variable.prototype.typeSelect = function(w00t) {
  this.type().element(by.css('.dropdown-toggle')).click();
  return this.type().element(by.cssContainingText('a', w00t));
};

Variable.prototype.name = function() {
  return this.node.element(by.css('.name'));
};
Variable.prototype.nameValue = function() {
  return this.name().getAttribute('value');
};
Variable.prototype.nameText = function() {
  return this.name().getText();
};


Variable.prototype.value = function() {
  return this.node.element(by.css('.value'));
};
Variable.prototype.valueModalLink = function() {
  return this.value().element(by.css('a'));
};
Variable.prototype.valueValue = function() {
  return this.value().getAttribute('value');
};
Variable.prototype.valueType = function() {
  return this.value().getAttribute('type');
};
Variable.prototype.valueText = function() {
  return this.value().getText();
};



function Modal(node) {
  this.node = node;
}

Modal.prototype.header = function () {
  return this.node.element(by.css('.modal-header'));
};
Modal.prototype.body = function () {
  return this.node.element(by.css('.modal-body'));
};
Modal.prototype.textareaSerialized = function () {
  return this.body().element(by.css('textarea[ng-model="variable.value"]'));
};
Modal.prototype.footer = function () {
  return this.node.element(by.css('.modal-footer'));
};
Modal.prototype.button = function (text) {
  return this.footer().element(by.cssContainingText('button', text));
};



function Page() { }

Page.prototype.variable = function(identifier, index) {
  return new Variable(element.all(by.css(identifier + ' [cam-widget-variable]')).get(index));
};

Page.prototype.modal = function() {
  return new Modal(element(by.css('body > .modal')));
};


module.exports = new Page();