import { Component, OnInit, Input } from '@angular/core';
import { CategoriasApiService } from '../../../services/categorias-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from '../../../shared/Categoria';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorias-edit',
  templateUrl: './categorias-edit.component.html',
  styleUrls: ['./categorias-edit.component.sass']
})
export class CategoriasEditComponent implements OnInit {
  @Input() categoria = new Categoria();
  categoriaForm: FormGroup;
  id:number;
  nome:string='';
  isLoadingResults = false;

  constructor(private api: CategoriasApiService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }


  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    const { nome } = this.categoriaForm.value;
    this.categoria = new Categoria();
    this.categoria.nome = nome;

    this.api.updateCategoria(this.id, this.categoria)
        .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/categorias-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  updateCategoria() {
    this.api.updateCategoria(this.route.snapshot.params['id'], this.categoria).subscribe((categoria) => {
      this.router.navigate(['/categorias-details/' + categoria.id]);
    }, (err) => {
      console.log(err);
    });
  }

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

  categoriaDetails() {
    this.router.navigate(['/product-details', this.id]);
  }

  ngOnInit() {
    this.api.getCategoriaPorId(this.route.snapshot.params['id'])
    .subscribe((categoria: Categoria) => {
      console.log(categoria);
      this.id = categoria.id;
      this.categoriaForm.setValue({
        nome: categoria.nome
      });
    });

    this.categoriaForm = this.formBuilder.group({
      'nome' : [null, Validators.required]
    });
  }

}
