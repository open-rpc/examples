[![Build Status](https://travis-ci.org/korzio/djv.svg?branch=master)](https://travis-ci.org/korzio/djv)
[![Join the chat at https://gitter.im/korzio/djv](https://badges.gitter.im/korzio/djv.svg)](https://gitter.im/korzio/djv?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# @korzio/djv-draft-04 <a name="title"></a>

Dynamic JSON-Schema Validator Plugin to support *draft-04* version of [JSON-Schema specification](https://tools.ietf.org/html/draft-fge-json-schema-validation-00).

Currently the *djv* package supports *JSON-Schema v6 and v4*.
Since version *2.0.0* it uses *v6* by default.
**@korzio/djv-draft-04** package intent is to provide support for *v4* for the *djv* package.

Please check the main [package documentation](https://github.com/korzio/djv/).

Version of the plugin is syncronized with the *djv*, as any major change in the main repo should point to plugin upgrade.

## Table of contents <a name="content"></a>

* [djv](#title)
* [Table of contents](#content)
* [Install](#install)
* [Usage](#usage)
* [References](#references)

## Install <a name="install"></a>

```bash
npm install @korzio/djv-draft-04
```

or

```html
<script src="@korzio/djv-draft-04.js"></script>
```

## Usage <a name="usage"></a>

To use the **v4** directly in the *djv* package specify `version` option when creating environment.

```javascript
const env = new djv({ version: 'draft-04' });
```

It is also possible to use `useVersion` method.

```javascript
env.useVersion('draft-04');
```

The *djv* will require *draft-04* plugin implicitly. **Be careful** as once the environment is modified, it will not be able to validate different versions of JSON-Schema.

## References <a name="references"></a>

* [djv](https://github.com/korzio/djv/)
* [JSON-Schema Specification](http://json-schema.org/)
* [JSON-Schema Benchmark](https://github.com/ebdrup/json-schema-benchmark)
