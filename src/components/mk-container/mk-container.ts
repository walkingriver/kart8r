import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'mk-container',
  templateUrl: 'mk-container.html'
})
export class MkContainerComponent {
  @ViewChild('spinner') spinner: ElementRef;
  @Input() items: any[];

  wheel: any;
  isInitialized: boolean;

  constructor() {
    console.log('Hello MkContainerComponent Component');

    this.wheel = {};
  }

  ngViewAfterInit() {
    console.log('Initializing Slot3d');
    this.wheel.spinner = this.spinner.nativeElement;
    this.wheel.tiles = this.wheel.spinner.children;

    var panelSize = this.wheel.tiles[0].clientHeight;
    var itemCount = this.wheel.tiles.length;
    var itemAngle = 360 / itemCount;
    var tz = Math.round((panelSize / 2) / Math.tan(Math.PI / itemCount));
    var translateZ = 'translateZ(' + tz + 'px)';

    console.log('Item list contains ' + itemCount +
      ' items, meaning each will require ' + itemAngle + 'deg and ' + tz + 'px each.');

    var i;
    for (i = 0; i < itemCount; i++) {
      // Set 3D rotation
      var rotate = 'rotateX(' + i * itemAngle + 'deg)';
      var el = this.wheel.tiles[i];
      el.style.transform = rotate + ' ' + translateZ;

      // if (el.scrollWidth > el.clientWidth) {
      //   scope.items[i].hasOverflow = true;
      // }
    }

    // We'll need these later
    this.wheel.translateZ = -tz;
    this.wheel.item = 0;
    this.wheel.itemAngle = -itemAngle;
    this.wheel.itemCount = itemCount;

    // Set the initial value to something random
    var r = Math.floor(Math.random() * (this.wheel.itemCount - 1));
    this.setItem(r);

    this.isInitialized = true;
  }

  setItem(item) {
    if (item < 0 || item > this.wheel.itemCount) { item = 0; }

    this.wheel.item = item;

    // Transform the container opposite the item's transform.
    var rotate = 'rotateX(' + item * this.wheel.itemAngle + 'deg)';
    this.wheel.scope.transform = rotate;
  }

  next() {
    this.setItem(this.wheel.item + 1);
  }

  prev() {
    this.setItem(this.wheel.item - 1);
  }

  item() {
    return this.wheel.item;
  }

  start() {
    this.wheel.scope.running = true;
  }

  stop() {
    this.wheel.scope.running = false;
  }

  spin(duration) {
    var t = duration || 5000;

    this.start();
    var r = Math.floor(Math.random() * (this.wheel.itemCount - 1));
    setTimeout(() => {
      stop();
      this.setItem(r);
    }, t);
  }

}
