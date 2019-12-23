import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { HomeComponent } from './home/home.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { MobileComponent } from './mobile/mobile.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { TicketComponent } from './ticket/ticket.component';
import { LoanComponent } from './loan/loan.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { FinanceComponent } from './finance/finance.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpHomeComponent } from './emp-home/emp-home.component';
import { EmpProfileComponent } from './emp-profile/emp-profile.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpwdComponent,
    HomeComponent,
    FundTransferComponent,
    MobileComponent,
    AccountComponent,
    ProfileComponent,
    TicketComponent,
    LoanComponent,
    InsuranceComponent,
    FinanceComponent,
    AboutComponent,
    IndexComponent,
    EmpLoginComponent,
    EmpHomeComponent,
    EmpProfileComponent,
    HistoryComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
