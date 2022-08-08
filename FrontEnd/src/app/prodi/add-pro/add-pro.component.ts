import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProdiService } from 'src/app/services/prodi.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AddProComponent>,
    public service: ProdiService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.formData = {
      ProdiId: 0,
      ProdiName:'',
      ChairmanProdi: ''
    }
  }

  onClose() {
    this.dialogbox.close();
    this.service.filter('registert Click');
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.service.addProdi(form.value).subscribe((res) => {
      this.resetForm();
      this.snackBar.open(res.toString(), 'Added Sucessfully!', {
        verticalPosition: 'top',
        duration: 3000
      });
    })
  }
}
