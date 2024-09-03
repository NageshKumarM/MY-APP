import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNOtFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { DirectivePipesComponent } from './directive-pipes/directive-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartCartComponent } from './flipkart-cart/flipkart-cart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { MyntraComponent } from './myntra/myntra.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CreateStudentCardComponent } from './create-student-card/create-student-card.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { AuthenticationGuard } from './authentication.guard';
import { ReloadComponent } from './reload/reload.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { ViewbankdetailsComponent } from './viewbankdetails/viewbankdetails.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard] ,component:DashboardComponent, children:[
    {path:'home', component:HomeComponent},
    {path:'welcome', component:WelcomeComponent},
    // {path:'calculator', component:CalculatorComponent},
    {path:'data-binding', component:DataBindingComponent},
    // {path:'rectangle', component:RectangleComponent},
    // {path:'circle', component:CircleComponent},
    // {path:'bmi', component:BMIComponent},
    {path:'dice-roll', component:DiceRollComponent},
    {path:'directive-pipes', component:DirectivePipesComponent},
    {path: 'employees', component:EmployeesComponent},
    {path:'flipkartcart', component:FlipkartCartComponent},
    {path: 'vehicles', component:VehiclesComponent},
    {path: 'bankaccounts', component:BankAccountsComponent},
    {path:'myntra', component:MyntraComponent},
    {path:'mail', component:MailComponent},
    {path:'createvehicle', component:CreateVehicleComponent},
    {path:'createbankaccount', component:CreateBankAccountComponent},
    {path:'studentcard', component:StudentCardComponent},
    {path:'createstudentcard', component:CreateStudentCardComponent},
    {path:'photogallery', component:PhotoGalleryComponent},
    {path:'reload', component:ReloadComponent},
    {path:'view-vehicle/:id', component:ViewVehicleComponent},
    {path:'viewbankdetails/:id', component:ViewbankdetailsComponent},
    {path:'edit-vehicle/:id', component:CreateVehicleComponent},
    {path:'editbankaccount/:id', component:CreateBankAccountComponent},
    {path: 'createuser', component:CreateUserComponent},
    {path:'parent', component:ParentComponent},
    {path:'', component:WelcomeComponent}
  ]},
  {path:'',component:LoginComponent},
  {path:'**', component:PageNOtFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
