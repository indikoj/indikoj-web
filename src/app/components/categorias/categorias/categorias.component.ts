import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoriasApiService } from '../../../services/categorias-api.service';
import { Categoria } from '../../../shared/Categoria';
import { from } from 'rxjs';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.sass']
})
export class CategoriasComponent implements OnInit {
  titulo = 'Lista de Categorias';
  displayedColumns : string[] = ['Id', 'Nome'];
  isLoadingResults = true;
  categorias: Categoria[] = [];

  constructor(private api: CategoriasApiService,
              private router: Router) { }
 
  add() {
    this.router.navigate(['/categorias-add']);
  }

  getCategorias() {
      this.api.getCategorias().subscribe(categorias => {
        this.categorias = categorias;
        console.log(this.categorias);
        function sayHi() {
          alert('Hello');
        }
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
      });
  }

  deletaCategoria(id: number) {
    this.api.deleteCategoria(id)
      .subscribe(res => {
          this.getCategorias()
        }, (err) => {
          console.log(err);
        }
      );
  }

  ngOnInit() {
    console.log('');
    this.getCategorias();
  }

}
