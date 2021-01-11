import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'simple-form',
  shadow: true,
})
export class SimpleForm {

  /**
   * FormID.
   */
  @Prop() formId!: string;
  /**
   * Form Action.
   */
  @Prop() action: string;

  render() {
    return (
      <form action={this.action} id={this.formId}>
        <slot/>
        <button type={'submit'}>Submit form</button>
      </form>
    );
  }

}
