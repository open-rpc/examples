(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

/* eslint no-param-reassign: [2, { "props": false }] */
var djvDraft04 = function djvDraft04(_ref) {
  var properties = _ref.properties,
      keywords = _ref.keywords,
      validators = _ref.validators,
      formats = _ref.formats,
      keys = _ref.keys,
      transformation = _ref.transformation;

  Object.assign(properties, {
    minimum: function minimum(schema) {
      return '%s <' + (schema.exclusiveMinimum ? '=' : '') + ' ' + schema.minimum;
    },
    maximum: function maximum(schema) {
      return '%s >' + (schema.exclusiveMaximum ? '=' : '') + ' ' + schema.maximum;
    }
  });

  delete properties.exclusiveMaximum;
  delete properties.exclusiveMinimum;

  ['$id', 'contains', 'const', 'examples'].forEach(function (key) {
    var index = keywords.indexOf(key);
    if (index === -1) {
      return;
    }

    keywords.splice(index, 1);
  });

  if (keywords.indexOf('exclusiveMaximum') === -1) {
    keywords.push('exclusiveMaximum', 'exclusiveMininum', 'id');
  }

  ['contains', 'constant', 'propertyNames'].forEach(function (key) {
    var validator = validators.name[key];
    delete validators.name[key];

    var index = validators.list.indexOf(validator);
    if (index === -1) {
      return;
    }

    validators.list.splice(index, 1);
  });

  delete formats['json-pointer'];
  delete formats['uri-reference'];
  delete formats['uri-template'];

  Object.assign(keys, { id: 'id' });
  Object.assign(transformation, {
    ANY_SCHEMA: true,
    NOT_ANY_SCHEMA: false
  });
};

module.exports = djvDraft04;

})));
//# sourceMappingURL=djv-draft-04.js.map
