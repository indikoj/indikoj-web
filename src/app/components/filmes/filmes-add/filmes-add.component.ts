import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmesApiService } from '../../../services/filmes-api.service';
import { Filme } from '../../../shared/Filme';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-filmes-add',
  templateUrl: './filmes-add.component.html',
  styleUrls: ['./filmes-add.component.sass']
})
export class FilmesAddComponent implements OnInit {
  //Melhoria trazendo o Objeto
  @Input() filme = new Filme(); //{id: '', nome: '', descricao: ''};
  filmeForm: FormGroup;
  nome:string='';
  descricao:string='';
  isLoadingResults = false;

  constructor(private api: FilmesApiService, 
              private router: Router,
              private formBuilder: FormBuilder) { }
  
onFormSubmit(form:NgForm) {
  this.isLoadingResults = true;
  
  const { nome, descricao } = this.filmeForm.value;
  this.filme = new Filme();
  this.filme.nome = nome;
  this.filme.descricao = descricao;

  this.api.addFilme(this.filme)
    .subscribe(res => {
        console.log(res);
        let id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/filmes-details', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  } 

  addFilme() {
    this.api.addFilme(this.filme).subscribe((resultado) => {
      this.router.navigate['/filmes'];
    }, (err) => {
        console.log(err);
    });
  }
  
  ngOnInit() {
    this.filmeForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'descricao' : [null, Validators.required]
    });
  }

}
