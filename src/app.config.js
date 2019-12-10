// App-specific config

// Using CommonJS instead of ES2015+ export, because we also need to
// provide this object to Webpack in vue.config.js.
module.exports = {
  siteTitle: 'Demo Site',
  team: 'Team Phoenix',
  description: 'Simple vue starter for Mission IT web application.'
};
