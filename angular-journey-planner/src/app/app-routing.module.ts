import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';

const routes: Routes = [
   { path: '', component:LoginComponent },
];

@NgModule({
  imports: [CommonModule]
})

export class AppRoutingModule { }
