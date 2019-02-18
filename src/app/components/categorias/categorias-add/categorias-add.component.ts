import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasApiService } from '../../../services/categorias-api.service';
import { Categoria } from '../../../shared/Categoria';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorias-add',
  templateUrl: './categorias-add.component.html',
  styleUrls: ['./categorias-add.component.sass']
})
export class CategoriasAddComponent implements OnInit {
  //Melhoria trazendo o Objeto
  @Input() categoria = new Categoria(); //{id: '', nome: '', descricao: ''};
  categoriaForm: FormGroup;
  nome:string='';
  descricao:string='';
  isLoadingResults = false;

  constructor(private api: CategoriasApiService, 
              private router: Router,
              private formBuilder: FormBuilder) { }
  
onFormSubmit(form:NgForm) {
  this.isLoadingResults = true;
  
  const { nome } = this.categoriaForm.value;
  this.categoria = new Categoria();
  this.categoria.nome = nome;

  this.api.addCategoria(this.categoria)
    .subscribe(res => {
        console.log(res);
        let id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/categorias-details', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  } 

  addCategoria() {
    this.api.addCategoria(this.categoria).subscribe((resultado) => {
      this.router.navigate['/categorias'];
    }, (err) => {
        console.log(err);
    });
  }
  
  ngOnInit() {
    this.categoriaForm = this.formBuilder.group({
      'nome' : [null, Validators.required]
    });
  }

}
