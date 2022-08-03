
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MahasiswaService } from 'src/app/services/mahasiswa.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AddMhsComponent } from '../add-mhs/add-mhs.component';
import { EditMhsComponent } from '../edit-mhs/edit-mhs.component';
import { Mahasiswa } from 'src/app/models/mahasiswa';
import { MatPaginator } from '@angular/material/paginator';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import { SelectionModel } from '@angular/cdk/collections';
import { DeleteMhsComponent } from '../delete-mhs/delete-mhs.component';

@Component({
  selector: 'app-show-mhs',
  templateUrl: './show-mhs.component.html',
  styleUrls: ['./show-mhs.component.css']
})
export class ShowMhsComponent implements OnInit {

  constructor(private service: MahasiswaService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.service.listen().subscribe((m) => {
      console.log(m);
      this.RefreshMhsLsit();
    })
  }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['MahasiswaId', 'Nim', 'MahasiswaName', 'Prodi', 'MailID', 'RegisteredDate', 'Address', 'Age', 'Options']
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;

  ngOnInit(): void {
    this.RefreshMhsLsit();
  }

  RefreshMhsLsit() {
    this.service.getMhsList().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      console.log(data);
    });
  }

  applyFiler(filterValue: string) {
    this.listData.filter = filterValue.trim().toLocaleLowerCase();
  }

  onAdd() {
    //debugger;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AddMhsComponent, dialogConfig);
  }

  onEdit(mhs: Mahasiswa) {
    //debugger;
    console.log(mhs);
    this.service.formData = mhs;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(EditMhsComponent, dialogConfig);
  }

  onDelete(id: number) {
    console.log(id);
    let dialogRef = this.dialog.open(DeleteMhsComponent, {
      disableClose: true,
      width: '400px',
      height: '200px',
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.service.deleteMahasiswa(id).subscribe((res) => {
        this.RefreshMhsLsit();
        this.snackBar.open(res.toString(), 'Deleted Sucessfully!', {
          verticalPosition: 'top',
          duration: 3000
        });
      })
    };
});

    // if (confirm('Are you sure want to delete?')) {
      // this.service.deleteEmployee(id).subscribe((res) => {
      //   this.RefreshEmpLsit();
      //   this.snackBar.open(res.toString(), 'Deleted Sucessfully!', {
      //     verticalPosition: 'top',
      //     duration: 3000
      //   });
      // })
    // }
  }

  public downloadPDF(): void {
    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
  }
}
    //const pdfTable = this.pdfTable.nativeElement;
   // doc.Fromhtml(pdfTable.innerHTML, 15, 15, {
    //  width: 190,
    //  'elementHandlers': specialElementHandlers
   // });
  //  doc.save('tableToPdf.pdf');
 // }

 // exportToExcel() {
  //  const workSheet = XLSX.utils.json_to_sheet(this.listData.data, { header: ['dataprop1', 'dataprop2'] });
  //  const workBook: XLSX.WorkBook = XLSX.utils.book_new();
  //  XLSX.utils.book_append_sheet(workBook, workSheet, 'SheetName');
  //  XLSX.writeFile(workBook, 'filename.xlsx');
  //}

