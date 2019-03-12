import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { FilmesComponent } from './components/filmes/filmes/filmes.component';
import { FilmesAddComponent } from './components/filmes/filmes-add/filmes-add.component';
import { FilmesDetailsComponent } from './components/filmes/filmes-details/filmes-details.component';
import { FilmesEditComponent } from './components/filmes/filmes-edit/filmes-edit.component';
import { CategoriasEditComponent } from './components/categorias/categorias-edit/categorias-edit.component';
import { CategoriasDetailsComponent } from './components/categorias/categorias-details/categorias-details.component';
import { CategoriasAddComponent } from './components/categorias/categorias-add/categorias-add.component';
import { CategoriasComponent } from './components/categorias/categorias/categorias.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { CompanyTypesComponent } from './components/company-types/company-types/company-types.component';
import { CompanyTypesAddComponent } from './components/company-types/company-types-add/company-types-add.component';
import { CompanyTypesEditComponent } from './components/company-types/company-type-edit/company-types-edit.component';
import { CompanyTypesDetailsComponent } from './components/company-types/company-types-detais/company-types-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  //Filmes
  {
    path: 'filmes',
    component: FilmesComponent,
    data: { title: 'Lista de Filmes'},
    canActivate: [AuthGuardService]
  },
  {
   path:'filmes-add',
   component: FilmesAddComponent,
   data: { title: 'Adicao de Filmes'},
   canActivate: [AuthGuardService]
  },
  {
    path: 'filmes-details/:id',
    component: FilmesDetailsComponent,
    data: { title: 'Detalhes de Filmes'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'filmes-edit/:id',
    component: FilmesEditComponent,
    data: { title: 'Alteração de Filmes'},
    canActivate: [AuthGuardService]
  },
  //categorias
  {
    path: 'categorias',
    component: CategoriasComponent,
    data: { title: 'Lista de Categorias'},
    canActivate: [AuthGuardService]
  },
  {
   path:'categorias-add',
   component: CategoriasAddComponent,
   data: { title: 'Adicao de Categorias'},
   canActivate: [AuthGuardService]
  },
  {
    path: 'categorias-details/:id',
    component: CategoriasDetailsComponent,
    data: { title: 'Detalhes de Categorias'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'categorias-edit/:id',
    component: CategoriasEditComponent,
    data: { title: 'Alteração de Categorias'}
  },
  //tipo de servico
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
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Alteração de Tipo de Servicos'},
    canActivate: [AuthGuardService]
  },
  //Login
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
