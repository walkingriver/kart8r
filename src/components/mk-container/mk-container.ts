import { Component } from '@angular/core';

/**
 * Generated class for the MkContainerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'mk-container',
  templateUrl: 'mk-container.html'
})
export class MkContainerComponent {

  text: string;

  constructor() {
    console.log('Hello MkContainerComponent Component');
    this.text = 'Hello World';
  }

}
