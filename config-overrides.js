// config-overrides.js
module.exports = function override(config, env) {
    // Add a rule to ignore source map warnings
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      use: ['source-map-loader'],
      exclude: [/node_modules\/@react-three\/drei\/node_modules\/@mediapipe\/tasks-vision/],
    });
  
    // Ignore warnings
    config.ignoreWarnings = [/Failed to parse source map/];
  
    return config;
  };
  