# fixed-floor

> Math.floor with fixed, formats a number using fixed-point notation and returns a number.

[![Build Status](https://travis-ci.org/TCharts/fixed-floor.svg?branch=master)](https://travis-ci.org/TCharts/fixed-floor) [![Coverage Status](https://coveralls.io/repos/github/TCharts/fixed-floor/badge.svg)](https://coveralls.io/github/TCharts/fixed-floor) [![npm](https://img.shields.io/npm/v/fixed-floor.svg)](https://www.npmjs.com/package/fixed-floor) [![npm download](https://img.shields.io/npm/dm/fixed-floor.svg)](https://www.npmjs.com/package/fixed-floor)


## Usage

> **npm i --save fixed-floor**


```js
var floor = require('fixed-floor');
// floor(number, toFixed);

floor(125.34567, 2); // 125.34
floor(125.34567); // 125
floor(125.34567, -1); // 120
```


## License

ISC@[ProtoTeam](https://github.com/ProtoTeam).

