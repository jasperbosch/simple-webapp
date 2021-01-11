import { p as promiseResolve, b as bootstrapLazy } from './index-87fff49d.js';

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["simple-form",[[1,"simple-form",{"formId":[1,"form-id"],"action":[1]}]]],["simple-input",[[1,"simple-input",{"label":[1],"name":[1]}]]]], options);
  });
};

export { defineCustomElements };
