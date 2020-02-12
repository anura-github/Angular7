import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register.service/register.component';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guards';


const routes: Routes = [{path:'', component:LandingComponent},
{path:'register',component:RegisterComponent},
{path:'login', component:LoginComponent},
{path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
