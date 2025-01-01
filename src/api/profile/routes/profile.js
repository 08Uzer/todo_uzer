'use strict';

/**
 * profile router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::profile.profile', {
  routes: [
    {
      method: 'POST',
      path: '/send-otp',
      handler: 'profile.sendOtp', // Ensure the handler matches the controller method
      config: {
        policies: [],
        description: 'Send OTP to the user\'s email.',
      },
    },
    {
      method: 'POST',
      path: '/verify-otp',
      handler: 'profile.verifyOtp', // Ensure the handler matches the controller method
      config: {
        policies: [],
        description: 'Verify the OTP sent to the user.',
      },
    },
  ],
});
