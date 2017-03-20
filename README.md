# geo-area
[![npm version](https://badge.fury.io/js/geo-area.svg)](https://badge.fury.io/js/geo-area)

calculate polygon area by geo coordinates

## usage

```javascript
const geoarea = require('geo-area')(/*options*/{x: 'lng', y: 'lat'});

const polygon = [
  {
    lng: 121.409058,
    lat: 31.191149
  },
  ...
];

let area = geoarea(polygon);

```

## Options

| option        | desc           | default     |
| ------------- |:--------------:| ------------|
| x             | property key x | 'longitude' |
| y             | property key y | 'latitude'  |

