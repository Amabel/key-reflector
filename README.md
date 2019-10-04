<h1>Key Reflector</h1>
<p>Generate objects with the same key and value.</p>
<a href="https://circleci.com/gh/Amabel/key-reflector">
  <img src="https://img.shields.io/circleci/build/github/Amabel/key-reflector.svg?style=for-the-badge" alt="Build">
</a>
<a href="#">
  <img src="https://img.shields.io/npm/v/key-reflector.svg?style=for-the-badge" alt="npm Downloads per Month">
<a>

<a href="https://github.com/Amabel/key-reflector/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/amabel/key-reflector.svg?style=for-the-badge" alt="MIT License">
</a>
<br><br>

## Installation

```
npm install key-reflector --save
```

or

```
yarn add key-reflector
```

## Usage

### Basic

```javascript
import KeyReflector from 'key-reflector'

KeyReflector.reflectKeys(['FOO', 'BAR', 'BAZ'])
```

will returns:

```
{
  FOO: 'FOO',
  BAR: 'BAR',
  BAZ: 'BAZ',
}
```

### Syntax

```javascript
KeyReflector.reflectKeys(keys[, options])
```

- **keys**
  - Type: `[String]`
  - Keys to be reflected. Returns an object with the same key and value for each key.
  - If `keys` is null, it will return an empty object `{}`.
- **options** (optional)
  - Type: `Object`
  - The options for `reflectKeys`. See more in [Options](#Options).


## Options

### **valuePrefix**

- Type: `String`
- Default: `''`

Prefix to be added to each value.

Example:

```javascript
KeyReflector.reflectKeys(['FOO', 'BAR', 'BAZ'], { valuePrefix: 'PREFIX_'})
```

returns:

```
{
  FOO: 'PREFIX_FOO',
  BAR: 'PREFIX_BAR',
  BAZ: 'PREFIX_BAZ',
}
```


## License

[MIT](https://github.com/Amabel/key-reflector/blob/master/LICENSE)
