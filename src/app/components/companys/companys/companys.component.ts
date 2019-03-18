import { Company } from './../../../shared/Company';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../../services/company/company.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-companys',
  templateUrl: './companys.component.html',
  styleUrls: ['./companys.component.sass']
})
export class CompanysComponent implements OnInit {

  titulo = 'Company List';
  displayedColumns : string[] = ['Id', 'Name'];
  isLoadingResults = true;
  companys: Company[] = [];

  constructor(private api: CompanyService,
              private router: Router) { }
 
  add() {
    this.router.navigate(['/companys-add']);
  }

  get() {
      this.api.get().subscribe(companys => {
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
