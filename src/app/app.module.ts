import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './Login/user-login/user-login.component';
import { AdminLoginComponent } from './Login/admin-login/admin-login.component';
import { UserSignupComponent } from './Signup/user-signup/user-signup.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './settings/settings.component';
import { LoginOptionsComponent } from './login-options/login-options.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { QuickCreateProductComponent } from './quick-create-product/quick-create-product.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CanDeactivateGaurdService } from './canDeactivate-gaurd.service';
import { ResolveGaurd } from './resolve.gaurd';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AdminLoginComponent,
    UserSignupComponent,
    HeaderComponent,
    SettingsComponent,
    LoginOptionsComponent,
    HomescreenComponent,
    HamburgerComponent,
    CreateProductComponent,
    QuickCreateProductComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [CanDeactivateGaurdService, ResolveGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
