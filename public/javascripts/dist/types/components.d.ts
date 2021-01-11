/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface SimpleForm {
        /**
          * Form Action.
         */
        "action": string;
        /**
          * FormID.
         */
        "formId": string;
    }
    interface SimpleInput {
        /**
          * Label.
         */
        "label": string;
        /**
          * Name of the input.
         */
        "name": string;
    }
}
declare global {
    interface HTMLSimpleFormElement extends Components.SimpleForm, HTMLStencilElement {
    }
    var HTMLSimpleFormElement: {
        prototype: HTMLSimpleFormElement;
        new (): HTMLSimpleFormElement;
    };
    interface HTMLSimpleInputElement extends Components.SimpleInput, HTMLStencilElement {
    }
    var HTMLSimpleInputElement: {
        prototype: HTMLSimpleInputElement;
        new (): HTMLSimpleInputElement;
    };
    interface HTMLElementTagNameMap {
        "simple-form": HTMLSimpleFormElement;
        "simple-input": HTMLSimpleInputElement;
    }
}
declare namespace LocalJSX {
    interface SimpleForm {
        /**
          * Form Action.
         */
        "action"?: string;
        /**
          * FormID.
         */
        "formId": string;
    }
    interface SimpleInput {
        /**
          * Label.
         */
        "label"?: string;
        /**
          * Name of the input.
         */
        "name"?: string;
    }
    interface IntrinsicElements {
        "simple-form": SimpleForm;
        "simple-input": SimpleInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "simple-form": LocalJSX.SimpleForm & JSXBase.HTMLAttributes<HTMLSimpleFormElement>;
            "simple-input": LocalJSX.SimpleInput & JSXBase.HTMLAttributes<HTMLSimpleInputElement>;
        }
    }
}
