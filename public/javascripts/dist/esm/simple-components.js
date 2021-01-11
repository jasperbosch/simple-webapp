import { p as promiseResolve, b as bootstrapLazy } from './index-87fff49d.js';

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["simple-form",[[1,"simple-form",{"formId":[1,"form-id"],"action":[1]}]]],["simple-input",[[1,"simple-input",{"label":[1],"name":[1]}]]]], options);
});
