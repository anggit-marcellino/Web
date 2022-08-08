
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Prodi } from 'src/app/models/prodi';
import { ProdiService } from 'src/app/services/prodi.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProComponent } from '../add-pro/add-pro.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditProComponent } from '../edit-pro/edit-pro.component';
import { MatPaginator } from '@angular/material/paginator';
import { jsPDF } from "jspdf";
import * as xlsx from 'xlsx';
import { DeleteProComponent } from '../delete-pro/delete-pro.component';

@Component({
  selector: 'app-show-pro',
  templateUrl: './show-pro.component.html',
  styleUrls: ['./show-pro.component.css']
})
export class ShowProComponent implements OnInit {

  constructor(private service: ProdiService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.service.listen().subscribe((m) => {
      console.log(m);
      this.RefreshDepLsit();
    })
  }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['ProdiId', 'ProdiName','ChairmanProdi', 'Options']
  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;

  ngOnInit(): void {
    this.RefreshDepLsit();
  }

  RefreshDepLsit() {
    this.service.getProList().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  applyFiler(filterValue: string) {
    this.listData.filter = filterValue.trim().toLocaleLowerCase();
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AddProComponent, dialogConfig);
  }

  onEdit(pro: Prodi) {
    console.log(pro);
    this.service.formData = pro;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(EditProComponent, dialogConfig);
  }

  onDelete(id: number) {
    console.log(id);
    let dialogRef = this.dialog.open(DeleteProComponent, {
      disableClose: true,
      width: '400px',
      height: '200px',
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.service.deleteProdi(id).subscribe((res) => {
        this.RefreshDepLsit();
        this.snackBar.open(res.toString(), 'Deleted Sucessfully!', {
          verticalPosition: 'top',
          duration: 3000
        });
      })
    };
});


    // console.log(id);
    // if (confirm('Are you sure want to delete?')) {
    //   this.service.deleteDepartment(id).subscribe((res) => {
    //     this.RefreshDepLsit();
    //     this.snackBar.open(res.toString(), 'Deleted Sucessfully!', {
    //       verticalPosition: 'top',
    //       duration: 3000
    //     });
    //   })
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
   // doc.fromHTML(pdfTable.innerHTML, 15, 15, {
  //    width: 190,
  //    'elementHandlers': specialElementHandlers
  //  });
  //  doc.save('tableToPdf.pdf');
 // }

  //exportToExcel() {
 //   const workSheet = xlsx.utils.json_to_sheet(this.listData.data, { header: ['dataprop1', 'dataprop2'] });
 //   const workBook: xlsx.WorkBook = xlsx.utils.book_new();
 //   xlsx.utils.book_append_sheet(workBook, workSheet, 'SheetName');
 //   xlsx.writeFile(workBook, 'filename.xlsx');
 // }
//}
