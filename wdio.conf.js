exports.config = {
    runner: 'local',
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 15 Pro Max',
        'appium:platformVersion': '17.5',
        'appium:automationName': 'XCUITest',
        'appium:app': 'com.apple.mobilesafari',
        'appium:fullReset': true
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['appium', {
          args: {
            address: '127.0.0.1',
            port: 4723
          }
        }]
      ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    //
    // =====
    // Hooks
    // =====
    // You can add various hooks here if needed
    // beforeSession: function (config, capabilities, specs, cid) {},
    // before: function (capabilities, specs) {},
    // after: function (result, capabilities, specs) {},
    // onComplete: function(exitCode, config, capabilities, results) {},
}
