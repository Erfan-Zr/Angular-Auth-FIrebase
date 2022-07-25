import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ForgetPasswordComponent,
  LoginComponent,
  RegisterComponent,
} from './components/auth';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
