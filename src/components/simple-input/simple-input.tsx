import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'simple-input',
  shadow: true,
})
export class SimpleInput {

  /**
   * Label.
   */
  @Prop() label: string;
  /**
   * Name of the input.
   */
  @Prop() name: string;

  render() {
    return (
      <div>
        <label htmlFor={this.name}>{this.label}</label>
        <input type="text" name={this.name} id={this.name}/>
      </div>
    );
  }

}
