// see https://github.com/meteor/meteor/wiki/How-to-submit-your-Android-app-to-Play-Store
App.info({
    id: 'com.instano.genie',
    name: 'Instano',
    description: 'Instano renders on-demand delivery of products and services in Bangalore, India.',
    version: '3.0.1'
});

// Pass preferences for a particular PhoneGap/Cordova plugin
App.configurePlugin('com.phonegap.plugins.facebookconnect', {
  APP_ID: '470431293120792',
  APP_NAME: 'Instano- order anything'
});