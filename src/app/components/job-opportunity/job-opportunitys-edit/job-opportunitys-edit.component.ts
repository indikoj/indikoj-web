import { Component, OnInit, Input } from '@angular/core';
import { JobOpportunityService } from '../../../services/job-opportunity/job-opportunity.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JobOpportunity } from '../../../shared/JobOpportunity';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company/company.service';
import { Company } from 'src/app/shared/Company';

@Component({
  selector: 'app-job-opportunitys-edit',
  templateUrl: './job-opportunitys-edit.component.html',
  styleUrls: ['./job-opportunitys-edit.component.sass']
})
export class JobOpportunitysEditComponent implements OnInit {
  @Input() jobOpportunity = new JobOpportunity();
  jobOpportunitysForm: FormGroup;
  id:number;
  name:string='';
  code: string;
  shortDescription: string;
  companyId: number;
  isLoadingResults = false;
  companys: Company[] = [];

  constructor(private api: JobOpportunityService,
    private companyApi: CompanyService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    const { name, code, shortDescription, companyId } = this.jobOpportunitysForm.value;
    this.jobOpportunity = new JobOpportunity();
    this.id = this.route.snapshot.params['id'];
    this.jobOpportunity.name = name;
    this.jobOpportunity.code = code;
    this.jobOpportunity.shortDescription = shortDescription;
    this.jobOpportunity.companyId = companyId;

    this.api.update(this.id, this.jobOpportunity)
        .subscribe(res => {
          let id = this.id;
          this.isLoadingResults = false;
          this.router.navigate(['/job-opportunitys-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  update() {
    this.api.update(this.route.snapshot.params['id'], this.jobOpportunity).subscribe((jobOpportunity) => {
      this.router.navigate(['/job-opportunitys-details/' + jobOpportunity.id]);
    }, (err) => {
      console.log(err);
    });
  }

  remove(id: number) {
    this.api.remove(id)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/job-opportunitys']);
      }, (err) => {
        console.log(err);
      }
    );  
  }

  companyTypeDetails() {
    this.router.navigate(['/job-opportunitys-details', this.jobOpportunity.id]);
  }

  getCompanys(): any {
    this.companyApi.get().subscribe(companys => {
      this.companys = companys;
      console.log(this.companys);
      function sayHi() {
        alert('Hello');
      }
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.api.getById(this.route.snapshot.params['id'])
    .subscribe((jobOpportunity: JobOpportunity) => {
      console.log(jobOpportunity);
      this.jobOpportunity.id = jobOpportunity.id;
      this.jobOpportunitysForm.setValue({
        name: jobOpportunity.name,
        code: jobOpportunity.name,
        shortDescription: jobOpportunity.name,
        companyId: jobOpportunity.companyId
      });
    });

    this.jobOpportunitysForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'code' : [null, Validators.required],
      'shortDescription' : [null, Validators.required],
      'companyId' : [null, Validators.required]
    });

    this.getCompanys();
  }
}
