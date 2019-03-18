import { CompanyType } from 'src/app/shared/CompanyType';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule } from "@angular/material";
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './components/login/login.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    CompanyTypesComponent,
    CompanyTypesAddComponent,
    CompanyTypesEditComponent,
    CompanyTypesDetailsComponent,
    CompanysComponent,
    CompanysAddComponent,
    CompanysEditComponent,
    CompanysDetailsComponent,
    DashboardComponent,
    CandidatesComponent,
    CandidatesAddComponent,
    CandidatesDetailsComponent,
    CandidatesEditComponent,
    JobOpportunitysComponent,
    JobOpportunitysAddComponent,
    JobOpportunitysEditComponent,
    JobOpportunitysDetailsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
