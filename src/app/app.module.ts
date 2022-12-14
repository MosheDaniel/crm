import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ShowCustomersComponent } from './components/show-customers/show-customers.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { SearchCustomerComponent } from './components/search-customer/search-customer.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { FilterPipe } from './pipes/filter.pipe';
import { EmployeesComponent } from './components/employees/employees.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';
import { EmployeePipe } from './pipes/employee.pipe';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    PnfComponent,
    AddCustomerComponent,
    SideBarComponent,
    ShowCustomersComponent,
    EditCustomerComponent,
    SearchCustomerComponent,
    PipesComponent,
    FilterPipe,
    EmployeesComponent,
    SearchEmployeeComponent,
    EmployeePipe,
    CustomerCardComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
