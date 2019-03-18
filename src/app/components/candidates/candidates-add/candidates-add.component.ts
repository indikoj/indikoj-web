import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateService } from '../../../services/candidate/candidate.service';
import { Candidate } from '../../../shared/Candidate';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Company } from 'src/app/shared/Company';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-candidates-add',
  templateUrl: './candidates-add.component.html',
  styleUrls: ['./candidates-add.component.sass']
})
export class CandidatesAddComponent implements OnInit {

  @Input() candidate = new Candidate();
  name: string;
  email: string;
  mobile: string;
  shortCompetences: string;
  curriculum: string;
  companyId: number;
  candidatesForm: FormGroup;
  isLoadingResults = false;
  companys: Company[] = [];
  
  constructor(private api: CandidateService, 
              private companyApi: CompanyService,
              private router: Router,
              private formBuilder: FormBuilder) { }
  
onFormSubmit(form:NgForm) {
  this.isLoadingResults = true;
  
  const { name, email, mobile, shortCompetences, curriculum, companyId } = this.candidatesForm.value;
  this.candidate = new Candidate();
  this.candidate.name = name;
  this.candidate.email = email;
  this.candidate.mobile = mobile;
  this.candidate.shortCompetences = shortCompetences;
  this.candidate.curriculum = curriculum;
  this.candidate.companyId = companyId;

  this.api.add(this.candidate)
    .subscribe(res => {
        console.log(res);
        let id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/candidates-details', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  } 

  add() {
    this.api.add(this.candidate).subscribe((res) => {
      this.router.navigate['/candidates'];
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
    this.candidatesForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'email' : [null, Validators.required],
      'mobile' : [null, Validators.required],
      'shortCompetences' : [null, Validators.required],
      'curriculum' : [null, Validators.required],
      'companyId' : [null, Validators.required]
    });

    this.getCompanys();
  }
}
