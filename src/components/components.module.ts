import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MkContainerComponent } from './mk-container/mk-container';

@NgModule({
	declarations: [MkContainerComponent],
	imports: [CommonModule],
	exports: [MkContainerComponent]
})
export class ComponentsModule {}
