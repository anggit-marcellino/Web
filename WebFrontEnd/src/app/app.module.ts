import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DosenComponent } from './dosen/dosen.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { ProdiComponent } from './prodi/prodi.component';
import { AddDosComponent } from './dosen/add-dos/add-dos.component';
import { EditDosComponent } from './dosen/edit-dos/edit-dos.component';
import { ShowDosComponent } from './dosen/show-dos/show-dos.component';
import { DeleteDosComponent } from './dosen/delete-dos/delete-dos.component';
import { AddMhsComponent } from './mahasiswa/add-mhs/add-mhs.component';
import { EditMhsComponent } from './mahasiswa/edit-mhs/edit-mhs.component';
import { ShowMhsComponent } from './mahasiswa/show-mhs/show-mhs.component';
import { DeleteMhsComponent } from './mahasiswa/delete-mhs/delete-mhs.component';
import { AddProComponent } from './prodi/add-pro/add-pro.component';
import { EditProComponent } from './prodi/edit-pro/edit-pro.component';
import { ShowProComponent } from './prodi/show-pro/show-pro.component';
import { DeleteProComponent } from './prodi/delete-pro/delete-pro.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    DosenComponent,
    MahasiswaComponent,
    ProdiComponent,
    AddDosComponent,
    EditDosComponent,
    ShowDosComponent,
    DeleteDosComponent,
    AddMhsComponent,
    EditMhsComponent,
    ShowMhsComponent,
    DeleteMhsComponent,
    AddProComponent,
    EditProComponent,
    ShowProComponent,
    DeleteProComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
