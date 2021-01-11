import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>


        <simple-form action={''} formId={'matomoform'}>
          <simple-input label={'First name'} name={'fname'}></simple-input>
          <simple-input label={'Last name'} name={'lname'}></simple-input>
        </simple-form>

      </div>
    );
  }
}