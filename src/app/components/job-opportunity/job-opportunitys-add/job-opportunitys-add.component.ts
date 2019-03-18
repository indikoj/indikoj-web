import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobOpportunityService } from '../../../services/job-opportunity/job-opportunity.service';
import { JobOpportunity } from '../../../shared/JobOpportunity';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Company } from 'src/app/shared/Company';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-job-opportunitys-add',
  templateUrl: './job-opportunitys-add.component.html',
  styleUrls: ['./job-opportunitys-add.component.sass']
})
export class JobOpportunitysAddComponent implements OnInit {

  //Melhoria trazendo o Objeto
  @Input() jobOpportunity = new JobOpportunity(); //{id: '', nome: '', descricao: ''};
  name: string;
  code: string;
  shortDescription: string;
  companyId: number;
  jobOpportunitysForm: FormGroup;
  isLoadingResults = false;
  companys: Company[] = [];

  constructor(private api: JobOpportunityService, 
              private companyApi: CompanyService,
              private router: Router,
              private formBuilder: FormBuilder) { }
  
onFormSubmit(form:NgForm) {
  this.isLoadingResults = true;
  
  const { name, code, shortDescription, companyId } = this.jobOpportunitysForm.value;
  this.jobOpportunity = new JobOpportunity();
  this.jobOpportunity.name = name;
  this.jobOpportunity.code = code;
  this.jobOpportunity.shortDescription = shortDescription;
  this.jobOpportunity.companyId = companyId;

  this.api.add(this.jobOpportunity)
    .subscribe(res => {
        console.log(res);
        let id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/job-opportunitys-details', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  } 

  add() {
    this.api.add(this.jobOpportunity).subscribe((res) => {
      this.router.navigate['/job-opportunitys'];
    }, (err) => {
        console.log(err);
    });
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
    this.jobOpportunitysForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'code' : [null, Validators.required],
      'shortDescription' : [null, Validators.required],
      'companyId' : [null, Validators.required]
    });

    this.getCompanys();
  }
}
