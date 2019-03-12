import { CompanyType } from './../../../shared/CompanyType';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyTypeService } from '../../../services/company-type/company-type.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-company-types',
  templateUrl: './company-types.component.html',
  styleUrls: ['./company-types.component.sass']
})
export class CompanyTypesComponent implements OnInit {

  titulo = 'Company List';
  displayedColumns : string[] = ['Id', 'Name'];
  isLoadingResults = true;
  companyTypes: CompanyType[] = [];

  constructor(private api: CompanyTypeService,
              private router: Router) { }
 
  add() {
    this.router.navigate(['/company-types-add']);
  }

  get() {
      this.api.get().subscribe(companyTypes => {
        this.companyTypes = companyTypes;
        console.log(this.companyTypes);
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
