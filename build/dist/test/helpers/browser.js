require('babel-register')();
var jsdom = require('jsdom');
var JSDOM = jsdom.JSDOM;
var document = (new JSDOM('')).window.document;
global.document = document;
var exposedProperties = ['window', 'navigator', 'document'];
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(function (property) {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});
global.navigator = {
    userAgent: 'node.js'
};
var documentRef = document;
//# sourceMappingURL=browser.js.map 
//# sourceMappingURL=browser.js.map 
//# sourceMappingURL=browser.js.map