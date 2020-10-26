module.exports = function(api) {
  api.cache(true);

  return {
    "presets": [
      ["@babel/preset-env",{
        "targets": {
          "node": 12
        }
      }]
    ],
    "plugins": [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose" : true }],
      ["module-resolver", {
        "alias": {
          "mu": "/usr/src/output/helpers/mu/index.js"
        }
      }]
    ]
  };
};
