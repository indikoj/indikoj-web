import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../../services/candidate/candidate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from 'src/app/shared/Candidate';

@Component({
  selector: 'app-candidates-details',
  templateUrl: './candidates-details.component.html',
  styleUrls: ['./candidates-details.component.sass']
})
export class CandidatesDetailsComponent implements OnInit {
  candidate = new Candidate();
  id: number;
  name: string;
  isLoadingResults = true;
  constructor(private api: CandidateService, 
              private router: Router,
              private route: ActivatedRoute) { }

  delete(id: number) {
    this.api.remove(id)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/candidates']);
      }, (err) => {
        console.log(err);
      }
    );  
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getById(id).subscribe((candidate: Candidate) => {
      console.log(candidate);
      this.candidate = candidate;
      this.isLoadingResults = false;
    });
  }
}
