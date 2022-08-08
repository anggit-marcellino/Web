import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProdiService } from 'src/app/services/prodi.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<EditProComponent>,
    public service: ProdiService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogbox.close();
    this.service.filter('registert Click');
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.service.updateProdi(form.value).subscribe((res) => {
      this.snackBar.open(res.toString(), 'Updated Sucessfully!', {
        verticalPosition: 'top',
        duration: 3000
      });
    })
  }
}
