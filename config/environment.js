 /* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'fyb',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    // google webfonts - included here (via an add-on) to avoid explicit entry in
    // cssmodule.exports = function(environment) {
    googleFonts: [
      'Montserrat:400,700'
    ],

    // Set or update content security policies
    contentSecurityPolicy: {
      'font-src': "'self' fonts.gstatic.com",
      'style-src': "'self' fonts.googleapis.com",
      'connect-src': "'self' http://localhost:4500"
    },

    'ember-simple-auth-token': {
      // get token
      serverTokenEndpoint: 'http://localhost:4500/get-token',
      // refresh token
      serverTokenRefreshEndpoint: 'http://localhost:4500/refresh-token',
      timeFactor: 1, // time factor is the multiplier for time units (1000 = milliseconds)
      refreshAccessTokens: true,
      refreshLeeway: 300 // Refresh the token 5 minutes (300s) before it expires.
    },

    torii: {
      sessionServiceName: 'toriiSession',
      providers: {
        'google-oauth2-bearer': {
          apiKey: '500707701090-h6ib4qve8b4rf445lpugjipn3bih9ere.apps.googleusercontent.com',
          redirectUri: 'http://localhost:4200'
        },
        'google-oauth2': {
          apiKey: '500707701090-h6ib4qve8b4rf445lpugjipn3bih9ere.apps.googleusercontent.com',
          redirectUri: 'http://localhost:4200',
          accessType: 'offline'
        },
        'facebook-oauth2': {
          apiKey: '829811140460593',
          redirectUri: 'http://localhost:4200',
          scope: 'public_profile' // optional
          /*
          Further facebook oauth optional properties include:
            state - An arbitrary unique string created by your app to guard
              against Cross-site Request Forgery.
            response_type - Determines whether the response data included when the
              redirect back to the app occurs is in URL parameters or fragments.
              See the Confirming Identity section to choose which type your app
              should use. This can be one of: code; token; code%20token.
            granted_scopes - Returns a comma-separated list of all Permissions
              granted to the app by the user at the time of login. Can be
              combined with other response_type values. When combined with
              token, response data is included as a URL fragment, otherwise
              included as a URL parameter.
            scope - A comma separated list of Permissions to request from the
              person using your app.
          */
        }
      }
    }

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
