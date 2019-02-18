import { Component, OnInit } from '@angular/core';
import { FilmesApiService } from '../../../services/filmes-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from 'src/app/shared/Filme';

@Component({
  selector: 'app-filmes-details',
  templateUrl: './filmes-details.component.html',
  styleUrls: ['./filmes-details.component.sass']
})
export class FilmesDetailsComponent implements OnInit {

  filme = new Filme();
  isLoadingResults = true;
  constructor(private api: FilmesApiService, 
              private router: Router,
              private route: ActivatedRoute) { }

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

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getFilmePorId(id).subscribe((filme: Filme) => {
      console.log(filme);
      this.filme = filme;
      this.isLoadingResults = false;
    });
  }

}
