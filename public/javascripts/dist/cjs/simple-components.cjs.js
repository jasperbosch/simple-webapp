'use strict';

const index = require('./index-85f3fe2a.js');

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('simple-components.cjs.js', document.baseURI).href));
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["simple-form.cjs",[[1,"simple-form",{"formId":[1,"form-id"],"action":[1]}]]],["simple-input.cjs",[[1,"simple-input",{"label":[1],"name":[1]}]]]], options);
});
