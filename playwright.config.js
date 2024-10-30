// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const config ={
  testDir: './tests',
  retries: 1,
  workers: 3, //Se le dice cuantos archivos a la vez puede probar, ARCHIVOS (No casos de pruebas).
  timeout: 30* 1000,
  expect: {
    timeout: 5000
  },
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName : 'chromium', //la prueba se realiza sobre safari
    headless : false, //true no se levanta el browser 
    screenshot: 'off', //si esta en on captura por cada pantalla
    trace : 'off', //si esta en en on hace un traceo de todas las interacciones que realiza 
  },

};

module.exports = config;
