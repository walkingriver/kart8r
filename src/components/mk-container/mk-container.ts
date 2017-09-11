import { Component, ElementRef, Input, NgZone, ViewChild } from '@angular/core';
import { MkItem } from "../../providers/mario-service/mario-service";

@Component({
  selector: 'mk-container',
  templateUrl: 'mk-container.html'
})

export class MkContainerComponent {
  @ViewChild('spinner') spinner: ElementRef;
  @Input() items: MkItem[];

  wheel: any;
  running: boolean;
  isInitialized: boolean;
  transform: string;

  constructor(private zone: NgZone) {
    console.log('Hello MkContainerComponent Component');

    this.wheel = {
      item: 0,
      translateZ: 0,
      itemAngle: 0,
      itemCount: 0,
      tiles: [],
      spinner: {},
      rotate: ''
    };
  }

  ngAfterViewInit() {
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
      //   items[i].hasOverflow = true;
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
    this.transform = rotate;
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
    this.running = true;
  }

  stop(item) {
    this.running = false;
    if (item) {
      this.setItem(item);
    }
  }

  spin(duration) {
    var t = duration || 5000;

    this.start();
    var r = Math.floor(Math.random() * (this.wheel.itemCount - 1));
    setTimeout(() => {
      this.zone.run(() => {
        this.stop(r);
      });
    }, t);
  }

  getImage(item): string {
    return `../assets/images/${item.image}`;
  }
}
