const path = require('path');

// Create Custom Helpers

//  Chain Helpers
// {{ helper1(helper2 text) }}
// {{#helper1}}{{helper2}}content{{/helper2}}{{/helper1}}
// {{url (concat 'samples/' this.name '/' this.class '/' this.id)}}


const hbsOptions = {
 defaultLayout: 'main',
 extname: '.hbs',
 // layoutsDir: path.join(__dirname, 'views/layouts'),
 // partialsDir: path.join(__dirname, 'views/partials')
 layoutsDir: path.join('views/layouts'),
 partialsDir: path.join('views/partials')
};

hbsOptions.helpers = {
 calculation: function (value) {
  return value * 10;
 },
 list: function (value, options) {
  let out = '<ul>';
  for (let i = 0; i < value.length; i++) {
   out = out + '<li>' + options.fn(value[i]) + '</li>';
  }
  return out + '</ul>';
 },
 pos: function (value, options) {
  return value + 28;
  // return options.name;
 },
 isEqual: function (v1, v2) {
  if (v1 === v2) {
   return true;
  }
  return false;
 },
 isGreaterThan: function (v1, v2) {
  if (v1 > v2) {
   return true;
  }
  return false;
 },
 isGreaterThanEqual: function (v1, v2) {
  if (v1 >= v2) {
   return true;
  }
  return false;
 },
 isLessThan: function (v1, v2) {
  if (v1 < v2) {
   return true;
  }
  return false;
 },
 isLessThanEqual: function (v1, v2) {
  if (v1 <= v2) {
   return true;
  }
  return false;
 },
 isEqualO: function (v1, v2, options) {
  if (v1 === v2) {
   return options.fn(this);
  }
  return options.inverse(this);
 },

 isEven: function (val) {
  if (val % 2 == 0) {
   return true;
  }
  return false;
 },
 isEvenO: function (conditional, options) {
  if (conditional % 2 == 0) {
   return options.fn(this);
  }
  return options.inverse(this);
 },

 concat: function () {
  // let str = ''
  // for (let i = 0; i < arguments.length - 1; i++) {
  //     str += arguments[i];
  // }
  // return str;

  // console.log('hihihiii  =', arguments.length);

  let str = [...arguments].slice(0, -1);
  return str.join('');
 },

 json: function () {
  const queryParams = this.query || {};
  return JSON.stringify(queryParams);
 }
};

module.exports = hbsOptions;
