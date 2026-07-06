import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';


import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HomeDashboardComponent } from './shared/component/home-dashboard/home-dashboard.component';
import { UserDashboardComponent } from './shared/component/user-dashboard/user-dashboard.component';
import { ProductsDashboardComponent } from './shared/component/products-dashboard/products-dashboard.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { FairsDashboardComponent } from './shared/component/fairs-dashboard/fairs-dashboard.component';
import { ProductComponent } from './shared/component/products-dashboard/product/product.component';
import { ProductFormComponent } from './shared/component/products-dashboard/product-form/product-form.component';
import { GetConfirmationComponent } from './shared/component/get-confirmation/get-confirmation.component';
import { MatCardModule } from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { UserFormComponent } from './shared/component/user-dashboard/user-form/user-form.component';
import { UserDetailsComponent } from './shared/component/user-dashboard/user-details/user-details.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    UserDashboardComponent,
    ProductsDashboardComponent,
    NavbarComponent,
    FairsDashboardComponent,
    ProductComponent,
    ProductFormComponent,
    GetConfirmationComponent,
    UserFormComponent,
    UserDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatChipsModule, 
    MatCardModule,
  

    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }