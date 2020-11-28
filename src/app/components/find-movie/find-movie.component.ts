import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { ExploreContainerComponent } from 'src/app/explore-container/explore-container.component';
import { SearchMovieService } from 'src/app/services/search-movie.service';
import { EventEmitter} from '@angular/core';

@Component({
  selector: 'app-find-movie',
  templateUrl: './find-movie.component.html',
  styleUrls: ['./find-movie.component.scss'],
})
export class FindMovieComponent implements OnInit {

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter(false);
  movie = { name : String, }
  peliculas : any = []
  movieNotFound = false

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private serviceSearch : SearchMovieService,    
    ) { }

  ngOnInit() {}

  async searchMovie(forma: NgForm){
    if (forma.valid) {
      const loading = await this.loadingCtrl.create({
        message: 'Validando...',
        spinner: 'bubbles'
      });
      await loading.present()
      this.movie.name = forma.value.movie
      this.serviceSearch.getSearchMovie(this.movie.name).
      subscribe(async data=>{
        loading.dismiss();  
        this.peliculas=data
        this.movieNotFound = true
        console.log(data)
        if(this.peliculas.results.length == 0){
            let toast = await this.toastCtrl.create({
            message: 'No existen peliculas con ese nombre',
            duration: 3000,
            position: "middle"
          });
          toast.present();
        }else {
        if(this.peliculas.results.errorMessage != "" && this.peliculas.results.length == 0 ){
          let toast = await this.toastCtrl.create({
            message: 'El servicio no esta disponible, intentelo más tarde',
            duration: 3000,
            position: "middle"
          });
          toast.present();
        }
      }
      })      
    }
    else{
      let toast = await this.toastCtrl.create({
        message: 'Debe digitar el nombre de la pelicula',
        duration: 3000,
        position: "middle"
      });
      toast.present();
    }
  }
}
