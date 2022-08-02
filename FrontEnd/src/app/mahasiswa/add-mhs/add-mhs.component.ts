import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MahasiswaService } from 'src/app/services/mahasiswa.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm, FormControl } from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-add-mhs',
  templateUrl: './add-mhs.component.html',
  styleUrls: ['./add-mhs.component.css']
})
export class AddMhsComponent implements OnInit {
  constructor(public dialogbox: MatDialogRef<AddMhsComponent>,
    public service: MahasiswaService,
    private snackBar: MatSnackBar) { }
  public listItems: Array<string> = [];
  ngOnInit(): void {
    this.resetForm();
    this.dropdownRefresh();
  }

  dropdownRefresh() {
    this.service.getDepDropDownValues().subscribe(data => {
      console.log(data);
      data.forEach(element => {
        this.listItems.push(element["ProdiName"]);
      })
    })
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.formData = {
      MahasiswaId: 0,
      Nim: null,
      MahasiswaName: '',
      Prodi: '',
      MailID: '',
      RegisteredDate: null,
      Address: '',
      Age: 0,
    }
  }

  onClose() {
    this.dialogbox.close();
    this.service.filter('registert Click');
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.service.addMahasiswa(form.value).subscribe((res) => {
      this.resetForm();
      this.snackBar.open(res.toString(), 'Added Sucessfully!', {
        verticalPosition: 'top',
        duration: 3000
      });
    })
  }
}
