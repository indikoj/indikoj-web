import { Component, OnInit } from '@angular/core';
import { CategoriasApiService } from '../../../services/categorias-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/shared/Categoria';

@Component({
  selector: 'app-categorias-details',
  templateUrl: './categorias-details.component.html',
  styleUrls: ['./categorias-details.component.sass']
})
export class CategoriasDetailsComponent implements OnInit {

  categoria = new Categoria();
  isLoadingResults = true;
  constructor(private api: CategoriasApiService, 
              private router: Router,
              private route: ActivatedRoute) { }

  deletaCategoria(id: number) {
    this.api.deleteCategoria(id)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/categorias']);
      }, (err) => {
        console.log(err);
      }
    );  
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getCategoriaPorId(id).subscribe((categoria: Categoria) => {
      console.log(categoria);
      this.categoria = categoria;
      this.isLoadingResults = false;
    });
  }

}
