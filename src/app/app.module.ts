import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './superadmin/dashboard/dashboard.component';
import { ConfigurationComponent } from './superadmin/configuration/configuration.component';
import { OrganizationComponent } from './superadmin/organization/organization.component';
import { TravelsComponent } from './superadmin/travels/travels.component';
import { UsersComponent } from './superadmin/users/users.component';
import { AddOrganizationComponent } from './superadmin/add-organization/add-organization.component';
import { AirincComponent } from './airinc/airinc.component';
import { CountryGuideComponent } from './admin/country-guide/country-guide.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { RoleComponent } from './admin/role/role.component';
import { TaxgridComponent } from './admin/taxgrid/taxgrid.component';
import { TemplateComponent } from './admin/template/template.component';
import { AllowanceComponent } from './admin/allowance/allowance.component';
import { CurrencyComponent } from './admin/currency/currency.component';
import { ProjectComponent } from './admin/project/project.component';
import { VendorComponent } from './admin/vendor/vendor.component';
import { VisaDocComponent } from './admin/visa-doc/visa-doc.component';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { ViewTravelComponent } from './view-travel/view-travel.component';
import { TokenInterceptorService } from './interceptor/token-interceptor.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    ConfigurationComponent,
    OrganizationComponent,
    TravelsComponent,
    UsersComponent,
    AddOrganizationComponent,
    AirincComponent,
    CountryGuideComponent,
    EmployeeComponent,
    RoleComponent,
    TaxgridComponent,
    TemplateComponent,
    AllowanceComponent,
    CurrencyComponent,
    ProjectComponent,
    VendorComponent,
    VisaDocComponent,
    AddTravelComponent,
    ViewTravelComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,    
    MatSlideToggleModule,
    NgxPaginationModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
