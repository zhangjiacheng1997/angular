import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { BComponent } from './b/b';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
	declarations: [AComponent,
    BComponent],
	imports: [
		BrowserModule
	],
	exports: [AComponent,
    BComponent]
})
export class ComponentsModule {}
