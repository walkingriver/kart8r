import { Component } from '@angular/core';
import { MkContainerComponent } from "../../components/mk-container/mk-container";
import { MarioServiceProvider, MkItem } from './../../providers/mario-service/mario-service';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
  mk: MkContainerComponent;
  characters: MkItem[];

  constructor(ms: MarioServiceProvider) {
    this.characters = ms.allCharacters();
  }
}
