import { CompanyType } from 'src/app/shared/CompanyType';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmesComponent } from './components/filmes/filmes/filmes.component';
import { FilmesAddComponent } from './components/filmes/filmes-add/filmes-add.component';
import { FilmesDetailsComponent } from './components/filmes/filmes-details/filmes-details.component';
import { FilmesEditComponent } from './components/filmes/filmes-edit/filmes-edit.component';
import { CategoriasComponent } from './components/categorias/categorias/categorias.component';
import { CategoriasAddComponent } from './components/categorias/categorias-add/categorias-add.component';
import { CategoriasDetailsComponent } from './components/categorias/categorias-details/categorias-details.component';
import { CategoriasEditComponent } from './components/categorias/categorias-edit/categorias-edit.component';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, 
  MatToolbarModule,
  MatMenuModule, 
  MatSidenavModule, 
  MatListModule,
  MatGridListModule } from "@angular/material";
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './components/login/login.component';
import { CompanyTypesComponent } from './components/company-types/company-types/company-types.component';
import { CompanyTypesAddComponent } from './components/company-types/company-types-add/company-types-add.component';
import { CompanyTypesEditComponent } from './components/company-types/company-type-edit/company-types-edit.component';
import { CompanyTypesDetailsComponent } from './components/company-types/company-types-detais/company-types-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent,
    FilmesAddComponent,
    FilmesDetailsComponent,
    FilmesEditComponent,
    CategoriasComponent,
    CategoriasAddComponent,
    CategoriasDetailsComponent,
    CategoriasEditComponent,
    NavComponent,
    LoginComponent,
    CompanyTypesComponent,
    CompanyTypesAddComponent,
    CompanyTypesEditComponent,
    CompanyTypesDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
