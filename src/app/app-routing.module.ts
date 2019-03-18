import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { CompanyTypesComponent } from './components/company-types/company-types/company-types.component';
import { CompanyTypesAddComponent } from './components/company-types/company-types-add/company-types-add.component';
import { CompanyTypesEditComponent } from './components/company-types/company-types-edit/company-types-edit.component';
import { CompanyTypesDetailsComponent } from './components/company-types/company-types-detais/company-types-details.component';
import { CompanysComponent } from './components/companys/companys/companys.component';
import { CompanysAddComponent } from './components/companys/companys-add/companys-add.component';
import { CompanysEditComponent } from './components/companys/companys-edit/companys-edit.component';
import { CompanysDetailsComponent } from './components/companys/companys-detais/companys-details.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CandidatesComponent } from './components/candidates/candidates/candidates.component';
import { CandidatesAddComponent } from './components/candidates/candidates-add/candidates-add.component';
import { CandidatesDetailsComponent } from './components/candidates/candidates-detais/candidates-details.component';
import { CandidatesEditComponent } from './components/candidates/candidates-edit/candidates-edit.component';
import { JobOpportunitysComponent } from './components/job-opportunity/job-opportunitys/job-opportunitys.component';
import { JobOpportunitysAddComponent } from './components/job-opportunity/job-opportunitys-add/job-opportunitys-add.component';
import { JobOpportunitysEditComponent } from './components/job-opportunity/job-opportunitys-edit/job-opportunitys-edit.component';
import { JobOpportunitysDetailsComponent } from './components/job-opportunity/job-opportunitys-detais/job-opportunitys-details.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'candidates',
    component: CandidatesComponent,
    data: { title: 'List candidates'},
    canActivate: [AuthGuardService]
  },
  {
   path:'candidates-add',
   component: CandidatesAddComponent,
   data: { title: 'Add candidates'},
   canActivate: [AuthGuardService]
  },
  {
    path: 'candidates-details/:id',
    component: CandidatesDetailsComponent,
    data: { title: 'Details of candidates'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'candidates-edit/:id',
    component: CandidatesEditComponent,
    data: { title: 'Edit candidates'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'company-types',
    component: CompanyTypesComponent,
    data: { title: 'List companys'},
    canActivate: [AuthGuardService]
  },
  {
   path:'company-types-add',
   component: CompanyTypesAddComponent,
   data: { title: 'Add companys'},
   canActivate: [AuthGuardService]
  },
  {
    path: 'company-types-details/:id',
    component: CompanyTypesDetailsComponent,
    data: { title: 'Details of companys'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'company-types-edit/:id',
    component: CompanyTypesEditComponent,
    data: { title: 'Edit companys'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'companys',
    component: CompanysComponent,
    data: { title: 'List companys'},
    canActivate: [AuthGuardService]
  },
  {
   path:'companys-add',
   component: CompanysAddComponent,
   data: { title: 'Add companys'},
   canActivate: [AuthGuardService]
  },
  {
    path: 'companys-details/:id',
    component: CompanysDetailsComponent,
    data: { title: 'Details of companys'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'companys-edit/:id',
    component: CompanysEditComponent,
    data: { title: 'Edit companys'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'job-opportunitys',
    component: JobOpportunitysComponent,
    data: { title: 'List companys'},
    canActivate: [AuthGuardService]
  },
  {
   path:'job-opportunitys-add',
   component: JobOpportunitysAddComponent,
   data: { title: 'Add companys'},
   canActivate: [AuthGuardService]
  },
  {
    path: 'job-opportunitys-details/:id',
    component: JobOpportunitysDetailsComponent,
    data: { title: 'Details of companys'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'job-opportunitys-edit/:id',
    component: JobOpportunitysEditComponent,
    data: { title: 'Edit companys'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Alteração de Tipo de Servicos'},
    canActivate: [AuthGuardService]
  },
  //Login
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
