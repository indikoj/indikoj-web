import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FilmesApiService } from '../../../services/filmes-api.service';
import { Filme } from '../../../shared/Filme';
import { from } from 'rxjs';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.sass']
})
export class FilmesComponent implements OnInit {
  titulo = 'Lista de Filmes';
  displayedColumns : string[] = ['Id', 'Nome', 'Descricao'];
  isLoadingResults = true;
  filmes: Filme[] = [];

  constructor(private api: FilmesApiService,
              private router: Router) { }
 
  add() {
    this.router.navigate(['/filmes-add']);
  }

  getFilmes() {
      this.api.getFilmes().subscribe(filmes => {
        this.filmes = filmes;
        console.log(this.filmes);
        function sayHi() {
          alert('Hello');
        }
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
      });
  }

  deletaFilme(id: number) {
    this.api.deleteFilme(id)
      .subscribe(res => {
          this.getFilmes()
        }, (err) => {
          console.log(err);
        }
      );
  }

  ngOnInit() {
    console.log('');
    this.getFilmes();
  }

}
