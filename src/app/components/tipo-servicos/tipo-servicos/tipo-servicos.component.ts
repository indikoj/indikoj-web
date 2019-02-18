import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TipoServicoService } from '../../../services/tipo-servico.service';
import { TipoServico } from '../../../shared/TipoServico';
import { from } from 'rxjs';

@Component({
  selector: 'app-tipo-servicos',
  templateUrl: './tipo-servicos.component.html',
  styleUrls: ['./tipo-servicos.component.sass']
})
export class TipoServicosComponent implements OnInit {

  titulo = 'Lista de TipoServicoss';
  displayedColumns : string[] = ['Id', 'Nome'];
  isLoadingResults = true;
  tipoServicos: TipoServico[] = [];

  constructor(private api: TipoServicoService,
              private router: Router) { }
 
  add() {
    this.router.navigate(['/tipo-servicos-add']);
  }

  getTipoServicoss() {
      this.api.getTipoServicos().subscribe(tipoServicos => {
        this.tipoServicos = tipoServicos;
        console.log(this.tipoServicos);
        function sayHi() {
          alert('Hello');
        }
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
      });
  }

  deletaTipoServicos(id: number) {
    this.api.deleteTipoServico(id)
      .subscribe(res => {
          this.getTipoServicoss()
        }, (err) => {
          console.log(err);
        }
      );
  }

  ngOnInit() {
    console.log('');
    this.getTipoServicoss();
  }


}
