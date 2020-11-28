import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MostPopularComponent } from './most-popular.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule ],
  declarations: [MostPopularComponent],
  exports: [MostPopularComponent]
})
export class MostPopularModule { }
