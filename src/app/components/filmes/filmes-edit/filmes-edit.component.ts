import { Component, OnInit, Input } from '@angular/core';
import { FilmesApiService } from '../../../services/filmes-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Filme } from '../../../shared/Filme';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-filmes-edit',
  templateUrl: './filmes-edit.component.html',
  styleUrls: ['./filmes-edit.component.sass']
})
export class FilmesEditComponent implements OnInit {
  @Input() filme = new Filme();
  filmeForm: FormGroup;
  id:number;
  nome:string='';
  descricao:string='';
  isLoadingResults = false;

  constructor(private api: FilmesApiService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }


  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    const { nome, descricao } = this.filmeForm.value;
    this.filme = new Filme();
    this.filme.nome = nome;
    this.filme.descricao = descricao;

    this.api.updateFilme(this.id, this.filme)
        .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/filmes-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  updateFilme() {
    this.api.updateFilme(this.route.snapshot.params['id'], this.filme).subscribe((filme) => {
      this.router.navigate(['/filmes-details/' + filme.id]);
    }, (err) => {
      console.log(err);
    });
  }

  deletaFilme(id: number) {
    this.api.deleteFilme(id)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/filmes']);
      }, (err) => {
        console.log(err);
      }
    );  
  }

  filmeDetails() {
    this.router.navigate(['/product-details', this.id]);
  }

  ngOnInit() {
    this.api.getFilmePorId(this.route.snapshot.params['id'])
    .subscribe((filme: Filme) => {
      console.log(filme);
      this.id = filme.id;
      this.filmeForm.setValue({
        nome: filme.nome,
        descricao: filme.descricao
      });
    });

    this.filmeForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'descricao' : [null, Validators.required]
    });
  }

}
