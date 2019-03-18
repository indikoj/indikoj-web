import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobOpportunityService } from '../../../services/job-opportunity/job-opportunity.service';
import { from } from 'rxjs';
import { JobOpportunity } from './../../../shared/JobOpportunity';

@Component({
  selector: 'app-job-opportunitys',
  templateUrl: './job-opportunitys.component.html',
  styleUrls: ['./job-opportunitys.component.sass']
})
export class JobOpportunitysComponent implements OnInit {

  titulo = 'Company List';
  displayedColumns : string[] = ['Id', 'Name'];
  isLoadingResults = true;
  jobOpportunitys: JobOpportunity[] = [];

  constructor(private api: JobOpportunityService,
              private router: Router) { }
 
  add() {
    this.router.navigate(['/job-opportunitys-add']);
  }

  get() {
      this.api.get().subscribe(jobOpportunitys => {
        this.jobOpportunitys = jobOpportunitys;
        console.log(this.jobOpportunitys);
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
