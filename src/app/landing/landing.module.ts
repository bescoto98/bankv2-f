import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingRootComponent } from './landing-root/landing-root.component';

import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent, RegisterComponent, LoginComponent, HomeNavbarComponent, LandingRootComponent],
  imports: [
    CommonModule,
    FormsModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
