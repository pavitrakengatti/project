import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { HomeComponent } from './home/home.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { AccountComponent } from './account/account.component';
import { MobileComponent } from './mobile/mobile.component';
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


const routes: Routes = [
  {path:"",component:IndexComponent},
   {path:'register',component:RegisterComponent},
  {path:'forgotpwd',component:ForgotpwdComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
   {path:'fund-transfer',component:FundTransferComponent},
{path:'account',component:AccountComponent},
{path:'mobile',component:MobileComponent},
{path:'profile',component:ProfileComponent},
{path:'ticket',component:TicketComponent},
{path:'loan',component:LoanComponent},
{path:'insurance',component:InsuranceComponent},
{path:'finance',component:FinanceComponent},
{path:'about',component:AboutComponent},
{path:'index',component:IndexComponent},
{path:'emp-login',component:EmpLoginComponent},
{path:'emp-home',component:EmpHomeComponent},
{path:'emp-profile',component:EmpProfileComponent},
{path:'history',component:HistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
