import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from  '@angular/material/button';
import { MatMenuModule } from  '@angular/material/menu';
import { MatDatepickerModule } from  '@angular/material/datepicker';
import { MatIconModule } from  '@angular/material/icon';
import { MatCardModule } from  '@angular/material/card';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatFormFieldModule } from  '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input';
import { MatTooltipModule } from  '@angular/material/tooltip';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { DosenComponent } from './dosen/dosen.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { ProdiComponent } from './prodi/prodi.component';
import { AddDosComponent } from './dosen/add-dos/add-dos.component';
import { EditDosComponent } from './dosen/edit-dos/edit-dos.component';
import { ShowDosComponent } from './dosen/show-dos/show-dos.component';
import { DeleteDosComponent } from './dosen/delete-dos/delete-dos.component';
import { DeleteMhsComponent } from './mahasiswa/delete-mhs/delete-mhs.component';
import { AddMhsComponent } from './mahasiswa/add-mhs/add-mhs.component';
import { EditMhsComponent } from './mahasiswa/edit-mhs/edit-mhs.component';
import { ShowMhsComponent } from './mahasiswa/show-mhs/show-mhs.component';
import { AddProComponent } from './prodi/add-pro/add-pro.component';
import { EditProComponent } from './prodi/edit-pro/edit-pro.component';
import { ShowProComponent } from './prodi/show-pro/show-pro.component';
import { DeleteProComponent } from './prodi/delete-pro/delete-pro.component';

import { LoginService } from './services/login.service';
import { ProdiService } from './services/prodi.service';
import { MahasiswaService } from './services/mahasiswa.service';
import { DosenService } from './services/dosen.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    DosenComponent,
    MahasiswaComponent,
    ProdiComponent,
    AddDosComponent,
    EditDosComponent,
    ShowDosComponent,
    DeleteDosComponent,
    DeleteMhsComponent,
    AddMhsComponent,
    EditMhsComponent,
    ShowMhsComponent,
    AddProComponent,
    EditProComponent,
    ShowProComponent,
    DeleteProComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
  ],
  providers: [AppRoutingModule, LoginService, DosenService, ProdiService, MahasiswaService],
  bootstrap: [AppComponent],
  entryComponents: [AddMhsComponent,EditMhsComponent, AddDosComponent, EditDosComponent,AddProComponent,EditProComponent],
})
export class AppModule { }
