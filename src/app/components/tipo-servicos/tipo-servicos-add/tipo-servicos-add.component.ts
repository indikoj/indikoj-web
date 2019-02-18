import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoServicoService } from '../../../services/tipo-servico.service';
import { TipoServico } from '../../../shared/TipoServico';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipo-servicos-add',
  templateUrl: './tipo-servicos-add.component.html',
  styleUrls: ['./tipo-servicos-add.component.sass']
})
export class TipoServicosAddComponent implements OnInit {

  //Melhoria trazendo o Objeto
  @Input() tipoServicos = new TipoServico(); //{id: '', nome: '', descricao: ''};
  tipoServicosForm: FormGroup;
  nome:string='';
  isLoadingResults = false;

  constructor(private api: TipoServicoService, 
              private router: Router,
              private formBuilder: FormBuilder) { }
  
onFormSubmit(form:NgForm) {
  this.isLoadingResults = true;
  
  const { nome } = this.tipoServicosForm.value;
  this.tipoServicos = new TipoServico();
  this.tipoServicos.nome = nome;

  this.api.addTipoServico(this.tipoServicos)
    .subscribe(res => {
        console.log(res);
        let id = res['codigo'];
        this.isLoadingResults = false;
        this.router.navigate(['/tipo-servicos-details', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  } 

  addTipoServicos() {
    this.api.addTipoServico(this.tipoServicos).subscribe((resultado) => {
      this.router.navigate['/tipo-servicos'];
    }, (err) => {
        console.log(err);
    });
  }
  
  ngOnInit() {
    this.tipoServicosForm = this.formBuilder.group({
      'nome' : [null, Validators.required]
    });
  }

}
