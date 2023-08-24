# Veriff Example

This displays how the latest `@veriff/js-sdk` package version does throws the following error:
```
TypeError: _veriff_js_sdk__WEBPACK_IMPORTED_MODULE_1__ is not a function
```

However if you revert back to an earlier package version:

1. To unsintall the package: `npm uninstall @veriff/js-sdk`
2. To install the older version that works: `npm install @veriff/js-sdk@1.1.1`
3. To install the latest version that does not work: `npm install @veriff/js-sdk`
4. To start the client: `npm start`
5. Go to http://localhost:3000 (not https)