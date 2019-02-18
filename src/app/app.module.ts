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
  MatMenuModule, MatSidenavModule, MatListModule } from "@angular/material";
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './components/login/login.component';
import { TipoServicosComponent } from './components/tipo-servicos/tipo-servicos/tipo-servicos.component';
import { TipoServicosAddComponent } from './components/tipo-servicos/tipo-servicos-add/tipo-servicos-add.component';
import { TipoServicosEditComponent } from './components/tipo-servicos/tipo-servicos-edit/tipo-servicos-edit.component';
import { TipoServicosDetailsComponent } from './components/tipo-servicos/tipo-servicos-detais/tipo-servicos-details.component';

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
    TipoServicosComponent,
    TipoServicosAddComponent,
    TipoServicosEditComponent,
    TipoServicosDetailsComponent
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
