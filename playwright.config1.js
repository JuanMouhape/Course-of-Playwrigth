// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const config = {
  testDir: './tests',
  retries: 1,
  workers: 3, //Se le dice cuantos archivos a la vez puede probar, ARCHIVOS (No casos de pruebas). 
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  projects: [
    {
      name: 'safari',
      use: {
        browserName: 'webkit', //la prueba se realiza sobre safari
        headless: true, //true no se levanta el browser 
        screenshot: 'off', //si esta en on captura por cada pantalla
        trace: 'on', //si esta en en on hace un traceo de todas las interacciones que realiza 
        ...devices['iPhone 11'] //dispositivo en el que queres que corra la prueba automatizada formato mobile
      },
      
    },
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: false, //true no se levanta el browser 
        screenshot: 'off', //si esta en on captura por cada pantalla
        trace: 'off', //si esta en en on hace un traceo de todas las interacciones que realiza
        ignoreHttpsErrors:true, //Se utiliza cuando aparece la pantalla de tu conexion es privada, y quieres avanzar de todas formas
        //permissions:['geolacation'],
        video: 'retain-on-failure'
        //...devices[''] ////dispositivo en el que queres que corra la prueba automatizada formato mobile
        //viewport : {width:720, height:720} //para hacer pruebas en formato responsive o darle las dimensiones de pantalla que preferimos
      }
    }   
  ]


};

module.exports = config;