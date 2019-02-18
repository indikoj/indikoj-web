import { Component, OnInit, Input } from '@angular/core';
import { TipoServicoService } from '../../../services/tipo-servico.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoServico } from '../../../shared/TipoServico';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipo-servicos-edit',
  templateUrl: './tipo-servicos-edit.component.html',
  styleUrls: ['./tipo-servicos-edit.component.sass']
})
export class TipoServicosEditComponent implements OnInit {
  @Input() tipoServicos = new TipoServico();
  tipoServicosForm: FormGroup;
  id:number;
  nome:string='';
  isLoadingResults = false;

  constructor(private api: TipoServicoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }


  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    const { codigo, nome } = this.tipoServicosForm.value;
    this.tipoServicos = new TipoServico();
    this.tipoServicos.codigo = codigo;
    this.tipoServicos.nome = nome;

    this.api.updateTipoServico(this.id, this.tipoServicos)
        .subscribe(res => {
          let id = this.id;
          this.isLoadingResults = false;
          this.router.navigate(['/tipo-servicos-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  updateTipoServicos() {
    this.api.updateTipoServico(this.route.snapshot.params['id'], this.tipoServicos).subscribe((tipoServicos) => {
      this.router.navigate(['/tipo-servicos-details/' + tipoServicos.id]);
    }, (err) => {
      console.log(err);
    });
  }

  deletaTipoServicos(id: number) {
    this.api.deleteTipoServico(id)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/tipo-servicoss']);
      }, (err) => {
        console.log(err);
      }
    );  
  }

  tipoServicosDetails() {
    this.router.navigate(['/tipo-servicos-details', this.id]);
  }

  ngOnInit() {
    this.api.getTipoServicoPorId(this.route.snapshot.params['id'])
    .subscribe((tipoServico: TipoServico) => {
      console.log(tipoServico);
      this.id = tipoServico.codigo;
      this.tipoServicosForm.setValue({
        nome: tipoServico.nome
      });
    });

    this.tipoServicosForm = this.formBuilder.group({
      'nome' : [null, Validators.required]
    });
  }


}
