import { Dosen } from './../models/dosen';
import { Prodi } from './../models/prodi';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DosenService {

  constructor(private http:HttpClient) { }
  readonly APIUrl = 'http://localhost:55075/api/Dosen';

  getDsnList(): Observable<Dosen[]>{
    return this.http.get<Dosen[]>(this.APIUrl + '/AllDosens');
  }

  getSingleDsnList(id: number): Observable<Dosen[]>{
    return this.http.get<Dosen[]>(this.APIUrl + '/GetDosensById/' + id)
  }

  addDosen(dsn:Dosen){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post(this.APIUrl+'/InsertDosens', dsn, httpOptions);
  }

  updateDosen(dsn:Dosen){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.put(this.APIUrl+'/UpdateDosens', dsn,httpOptions);
  }

  deleteDosen(id: number){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.delete(this.APIUrl+'/DeleteDosens?id='+ id, httpOptions);
  }

  getDepDropDownValues(){
    return this.http.get<Prodi[]>(this.APIUrl+'/Prodi');
  }

  private _listener = new Subject<any>();
  listen(): Observable<any>{
    return this._listener.asObservable();
  }

  filter(filterBy: string){
    this._listener.next(filterBy);
  }
}
