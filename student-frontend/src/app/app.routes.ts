import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { StudentsComponent } from './components/students/students';
import { StudentsResolver } from './services/students.resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'students',
    component: StudentsComponent,
    resolve: { students: StudentsResolver }
  }
];
