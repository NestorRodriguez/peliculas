import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FindMovieComponent } from './find-movie.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule ],
  declarations: [FindMovieComponent],
  exports: [FindMovieComponent]
})
export class FindMovieModule { }
