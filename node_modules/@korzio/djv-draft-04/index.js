/* eslint no-param-reassign: [2, { "props": false }] */
const djvDraft04 = ({
  properties,
  keywords,
  validators,
  formats,
  keys,
  transformation,
}) => {
  Object.assign(properties, {
    minimum(schema) {
      return `%s <${schema.exclusiveMinimum ? '=' : ''} ${schema.minimum}`;
    },
    maximum(schema) {
      return `%s >${schema.exclusiveMaximum ? '=' : ''} ${schema.maximum}`;
    },
  });

  delete properties.exclusiveMaximum;
  delete properties.exclusiveMinimum;

  ['$id', 'contains', 'const', 'examples'].forEach((key) => {
    const index = keywords.indexOf(key);
    if (index === -1) {
      return;
    }

    keywords.splice(index, 1);
  });

  if (keywords.indexOf('exclusiveMaximum') === -1) {
    keywords.push('exclusiveMaximum', 'exclusiveMininum', 'id');
  }

  ['contains', 'constant', 'propertyNames'].forEach((key) => {
    const validator = validators.name[key];
    delete validators.name[key];

    const index = validators.list.indexOf(validator);
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
    NOT_ANY_SCHEMA: false,
  });
};

module.exports = djvDraft04;
