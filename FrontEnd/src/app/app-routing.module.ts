import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProdiComponent } from './prodi/prodi.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { DosenComponent } from './dosen/dosen.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard Page'
    },
    children: [
      {
        path: 'prodi',
        component: ProdiComponent,
        data: {
          title: 'Prodi Page'
        },
     },
     {
      path: 'mahasiswa',
      component: MahasiswaComponent,
      data: {
        title: 'Mahasiswa Page'
      },
     },
     {
      path: 'dosen',
      component: DosenComponent,
      data: {
        title: 'Dosen Page'
      },
     },
 ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
