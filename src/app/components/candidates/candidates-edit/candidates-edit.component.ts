import { Component, OnInit, Input } from '@angular/core';
import { CandidateService } from '../../../services/candidate/candidate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Candidate } from '../../../shared/Candidate';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company/company.service';
import { Company } from 'src/app/shared/Company';

@Component({
  selector: 'app-candidates-edit',
  templateUrl: './candidates-edit.component.html',
  styleUrls: ['./candidates-edit.component.sass']
})
export class CandidatesEditComponent implements OnInit {
  @Input() candidate = new Candidate();
  candidatesForm: FormGroup;
  id:number;
  name:string='';
  email: string;
  mobile: string;
  shortCompetences: string;
  curriculum: string;
  companyId: number;
  isLoadingResults = false;
  companys: Company[] = [];

  constructor(private api: CandidateService,
    private companyApi: CompanyService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    const { name, email, mobile, shortCompetences, curriculum, companyId } = this.candidatesForm.value;
    this.candidate = new Candidate();
    this.id = this.route.snapshot.params['id'];
    this.candidate.name = name;
    this.candidate.email = email;
    this.candidate.mobile = mobile;
    this.candidate.shortCompetences = shortCompetences;
    this.candidate.curriculum = curriculum;
    this.candidate.companyId = companyId;

    this.api.update(this.id, this.candidate)
        .subscribe(res => {
          let id = this.id;
          this.isLoadingResults = false;
          this.router.navigate(['/candidates-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  update() {
    this.api.update(this.route.snapshot.params['id'], this.candidate).subscribe((candidate) => {
      this.router.navigate(['/candidates-details/' + candidate.id]);
    }, (err) => {
      console.log(err);
    });
  }

  remove(id: number) {
    this.api.remove(id)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/candidates']);
      }, (err) => {
        console.log(err);
      }
    );  
  }

  companyTypeDetails() {
    this.router.navigate(['/candidates-details', this.candidate.id]);
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
    .subscribe((candidate: Candidate) => {
      console.log(candidate);
      this.candidate.id = candidate.id;
      this.candidatesForm.setValue({
        name: candidate.name,
        email: candidate.email,
        mobile: candidate.mobile,
        shortCompetences: candidate.shortCompetences,
        curriculum: candidate.curriculum,
        companyId: candidate.companyId
      });
    });

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
