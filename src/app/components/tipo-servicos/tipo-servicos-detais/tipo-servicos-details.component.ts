import { Component, OnInit } from '@angular/core';
import { TipoServicoService } from '../../../services/tipo-servico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoServico } from 'src/app/shared/TipoServico';

@Component({
  selector: 'app-tipo-servicos-details',
  templateUrl: './tipo-servicos-details.component.html',
  styleUrls: ['./tipo-servicos-details.component.sass']
})
export class TipoServicosDetailsComponent implements OnInit {

  tipoServico = new TipoServico();
  id: number;
  nome: string;
  isLoadingResults = true;
  constructor(private api: TipoServicoService, 
              private router: Router,
              private route: ActivatedRoute) { }

  deletaTipoServicos(id: number) {
    this.api.deleteTipoServico(id)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/tipo-servicos']);
      }, (err) => {
        console.log(err);
      }
    );  
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getTipoServicoPorId(id).subscribe((tipoServico: TipoServico) => {
      console.log(tipoServico);
      this.tipoServico = tipoServico;
      this.isLoadingResults = false;
    });
  }
}
