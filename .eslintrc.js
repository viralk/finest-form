module.exports = {
  "extends": "airbnb-base",
  "env": {
      "browser": true,
      "jquery": true
  },
  // Defines global variables and functions used in the app.
  // True are write-access variables, false are read-only
  // "globals": {
  //     "Cookies": true
  // },
  "rules": {
      "no-param-reassign": 0,
      "max-len": 0,
      "wrap-iife": 0,
      "func-names": 0,
      "prefer-arrow-callback": 0,
      "prefer-template": 0
  }
};