import { Component, OnInit } from '@angular/core';
import { JobOpportunityService } from '../../../services/job-opportunity/job-opportunity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JobOpportunity } from 'src/app/shared/JobOpportunity';

@Component({
  selector: 'app-job-opportunitys-details',
  templateUrl: './job-opportunitys-details.component.html',
  styleUrls: ['./job-opportunitys-details.component.sass']
})
export class JobOpportunitysDetailsComponent implements OnInit {

  jobOpportunity = new JobOpportunity();
  id: number;
  name: string;
  isLoadingResults = true;
  constructor(private api: JobOpportunityService, 
              private router: Router,
              private route: ActivatedRoute) { }

  delete(id: number) {
    this.api.remove(id)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/company-types']);
      }, (err) => {
        console.log(err);
      }
    );  
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getById(id).subscribe((jobOpportunity: JobOpportunity) => {
      console.log(jobOpportunity);
      this.jobOpportunity = jobOpportunity;
      this.isLoadingResults = false;
    });
  }
}
