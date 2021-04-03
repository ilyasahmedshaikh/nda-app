import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditsBarComponent } from './credits-bar/credits-bar.component';

@NgModule({
  declarations: [
    CreditsBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreditsBarComponent
  ]
})
export class SharedModule { }
