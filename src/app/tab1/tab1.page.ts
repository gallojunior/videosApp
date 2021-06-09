import { IGenero } from './../models/IGenero.model';
import { GeneroService } from './../services/genero.service';
import { IListaFilmes, IFilmeApi } from './../models/IFilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  titulo = 'Filmes';

  listaVideos: IFilme[] = [
    {
      nome: 'Army of the Dead (2021)',
      lancamento: '14/05/2021',
      duracao: '2h28',
      classificacao: 66,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kn72J6BFcN71VYOl8sTVeo7x9ph.jpg',
      generos: ['Ação', 'Terror', 'Thriller', 'Crime'],
      pagina: '/army-of-dead',
    },
    {
      nome: 'Godzilla vs. Kong (2021)',
      lancamento: '01/04/2021',
      duracao: '1h53',
      classificacao: 81,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wllzjZxg4ynlAm5xmOICJ2uHOPJ.jpg',
      generos: ['Ação', 'Aventura', 'Ficção científica'],
      pagina: '/godzilla-vs-king-kong',
    },
    {
      nome: 'Demon Slayer - Mugen Train: O Filme (2020)',
      lancamento: '23/04/2021',
      duracao: '1h57',
      classificacao: 84,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m2FNRngyJMyxLatBMJR8pbeG2v.jpg',
      generos: ['Animação', 'Ação', 'Aventura', 'Fantasia', 'Drama'],
    },
    {
      nome: 'Espiral: O Legado de Jogos Mortais (2021)',
      lancamento: '14/05/2021',
      duracao: '1h33',
      classificacao: 66,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3OneyM3YB6WPdvrfdixL17MXH3J.jpg',
      generos: ['Thriller', 'Terror', 'Mistério'],
    },
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50',
      classificacao: 75,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
    },
    {
      nome: 'New Gods Nezha Reborn (2021)',
      lancamento: '12/02/2021',
      duracao: '1h56',
      classificacao: 86,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iyOgNaaDX67AUMWlzsGZVO1luoh.jpg',
      generos: ['Animação', 'Ação', 'Fantasia'],
    },
  ];

  generos: string[] = [];

  listaFilmes: IListaFilmes;

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router
  ) {}

  buscarFilmes(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() !== '') {
      this.filmeService.buscarFilmes(busca).subscribe((dados) => {
        this.listaFilmes = dados;
      });
    }
  }

  exibirFilme(filme: IFilmeApi) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
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
      message: 'Filme adicionado aos favoritos.',
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
