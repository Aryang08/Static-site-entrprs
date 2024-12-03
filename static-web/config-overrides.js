const { override, addBabelPreset } = require('customize-cra');

module.exports = override(
  addBabelPreset('@babel/preset-react'),
  // You can add more customization here
);
