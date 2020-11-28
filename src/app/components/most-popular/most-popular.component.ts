import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { MostPopularService } from 'src/app/services/most-popular.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss'],
})
export class MostPopularComponent implements OnInit {

  peliculas : any = []

  constructor(
    private toastCtrl: ToastController,
    private serviceMost : MostPopularService) { }

  ngOnInit() {
     this.serviceMost.getMostPopular().subscribe(async data => {
       this.peliculas = data
       if(this.peliculas.items.errorMessage != "" && this.peliculas.items.length == 0){
        let toast = await this.toastCtrl.create({
          message: 'El servicio no esta disponible, intentelo más tarde',
          duration: 3000,
          position: "middle"
        });
        toast.present();
       }
     })
  }

}
