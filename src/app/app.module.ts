import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNOtFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { DirectivePipesComponent } from './directive-pipes/directive-pipes.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlipkartCartComponent } from './flipkart-cart/flipkart-cart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { MyntraComponent } from './myntra/myntra.component';
import { MailComponent } from './mail/mail.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CreateStudentCardComponent } from './create-student-card/create-student-card.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ReloadComponent } from './reload/reload.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { ViewbankdetailsComponent } from './viewbankdetails/viewbankdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { CalcfunctionsComponent } from './calcfunctions/calcfunctions.component';
import { SiblingComponent } from './sibling/sibling.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { MarketingComponent } from './marketing/marketing.component';
import { Market1Component } from './market1/market1.component';
import { Market2Component } from './market2/market2.component';
import { Market3Component } from './market3/market3.component';
import { Market4Component } from './market4/market4.component';
import { TODOComponent } from './todo/todo.component';
import { ToDo1Component } from './to-do1/to-do1.component';
import { ToDo2Component } from './to-do2/to-do2.component';
import { ToDo3Component } from './to-do3/to-do3.component';
import { AboutUsModule } from './about-us/about-us.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CapitalDirective } from './capital.directive';
import { PricePipe } from './price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNOtFoundComponent,
    HomeComponent,
    WelcomeComponent,
    CalculatorComponent,
    DataBindingComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    DiceRollComponent,
    DirectivePipesComponent,
    EmployeesComponent,
    FlipkartCartComponent,
    VehiclesComponent,
    BankAccountsComponent,
    MyntraComponent,
    MailComponent,
    CreateVehicleComponent,
    CreateBankAccountComponent,
    StudentCardComponent,
    CreateStudentCardComponent,
    PhotoGalleryComponent,
    ReloadComponent,
    ViewVehicleComponent,
    ViewbankdetailsComponent,
    CreateUserComponent,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    TextAreaComponent,
    CalcfunctionsComponent,
    SiblingComponent,
    Sibling1Component,
    Sibling2Component,
    MarketingComponent,
    Market1Component,
    Market2Component,
    Market3Component,
    Market4Component,
    TODOComponent,
    ToDo1Component,
    ToDo2Component,
    ToDo3Component,
    CapitalDirective,
    PricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AboutUsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
