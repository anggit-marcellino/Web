import { Component, OnInit } from '@angular/core';
import { MahasiswaService } from 'src/app/services/mahasiswa.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-mhs',
  templateUrl: './edit-mhs.component.html',
  styleUrls: ['./edit-mhs.component.css']
})
export class EditMhsComponent implements OnInit {

  constructor(public dialbox: MatDialogRef<EditMhsComponent>,
    public service: MahasiswaService,
    private snackbar: MatSnackBar) { }
  public listItems: Array<string> = [];

  ngOnInit(): void {
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
  onClose() {
    this.dialbox.close();
    this.service.filter('registert Click');
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.service.updateMahasiswa(form.value).subscribe((res) => {
      this.snackbar.open(res.toString(), 'Updated Sucessfully!', {
        verticalPosition: 'top',
        duration: 3000
      });
    })
  }
}
