import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditsBarComponent } from './credits-bar/credits-bar.component';
import{ LoaderComponent } from './loader/loader.component'

@NgModule({
  declarations: [
    CreditsBarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreditsBarComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
