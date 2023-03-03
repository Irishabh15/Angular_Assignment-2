import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGaurdService } from './canDeactivate-gaurd.service';
import { CreateProductComponent } from './create-product/create-product.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { LoginOptionsComponent } from './login-options/login-options.component';
import { AdminLoginComponent } from './Login/admin-login/admin-login.component';
import { UserLoginComponent } from './Login/user-login/user-login.component';
import { QuickCreateProductComponent } from './quick-create-product/quick-create-product.component';
import { ResolveGaurd } from './resolve.gaurd';
import { SettingsComponent } from './settings/settings.component';
import { UserSignupComponent } from './Signup/user-signup/user-signup.component';

const routes: Routes = [
  {path: "login", component: LoginOptionsComponent, children: []},
  {path: "userlogin", component: UserLoginComponent},
  {path: "adminlogin", component: AdminLoginComponent},
  {path: "settings", component: SettingsComponent},
  {path: "homescreen", resolve: { data: ResolveGaurd}, component: HomescreenComponent},
  {path: "create-product", canDeactivate:[CanDeactivateGaurdService], component: CreateProductComponent},
  {path: "quick-create-product",  canDeactivate:[CanDeactivateGaurdService], component: QuickCreateProductComponent},
  {path: "error-page", component: ErrorPageComponent} 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
