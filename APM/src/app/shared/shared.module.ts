import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';

/*
  This is a shared module, so you can import it into another module and the one you need to share
*/

@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
    ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
