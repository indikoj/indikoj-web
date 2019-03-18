import { Candidate } from './../../../shared/Candidate';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateService } from '../../../services/candidate/candidate.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.sass']
})
export class CandidatesComponent implements OnInit {

  titulo = 'Company List';
  displayedColumns : string[] = ['Id', 'Name'];
  isLoadingResults = true;
  candidates: Candidate[] = [];

  constructor(private api: CandidateService,
              private router: Router) { }
 
  add() {
    this.router.navigate(['/candidates-add']);
  }

  get() {
      this.api.get().subscribe(candidates => {
        this.candidates = candidates;
        console.log(this.candidates);
        function sayHi() {
          alert('Hello');
        }
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
      });
  }

  delete(id: number) {
    this.api.remove(id)
      .subscribe(res => {
          this.get()
        }, (err) => {
          console.log(err);
        }
      );
  }

  ngOnInit() {
    console.log('');
    this.get();
  }
  
}
