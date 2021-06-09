import { GeneroService } from './../services/genero.service';
import { IListaSeries, ISerieApi } from './../models/ISerieAPI.models';
import { Component, OnInit } from '@angular/core';
import { SerieService } from '../services/serie.service';
import { DadosService } from './../services/dados.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  titulo = 'Séries';

  generos: string[] = [];

  listaSeries: IListaSeries;

  constructor(public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public serieService: SerieService,
    public generoService: GeneroService,
    public route: Router) {}

    buscarSeries(evento: any) {
      const busca = evento.target.value;
      if (busca && busca.trim() !== '') {
        this.serieService.buscarSeries(busca).subscribe((dados) => {
          this.listaSeries = dados;
        });
      }
    }

    exibirSerie(serie: ISerieApi) {
      this.dadosService.guardarDados('serie', serie);
      this.route.navigateByUrl('/dados-serie');
    }

    async exibirAlertaFavorito() {
      const alert = await this.alertController.create({
        header: 'Alerta!',
        message: 'Deseja realmente favoritar esta Série?',
        buttons: [
          {
            text: 'SIM, favoritar!',
            handler: () => {
              this.apresentarToast();
            },
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            },
          },
        ],
      });

      await alert.present();
    }

    async apresentarToast() {
      const toast = await this.toastController.create({
        message: 'Série adicionado aos favoritos.',
        duration: 2500,
        color: 'success',
        position: 'middle',
      });
      toast.present();
    }

    ngOnInit() {
      this.generoService.buscarGeneros().subscribe((dados) => {
        dados.genres.forEach((genero) => {
          this.generos[genero.id] = genero.name;
        });
        this.dadosService.guardarDados('generos', this.generos);
      });
    }



}
