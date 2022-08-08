import { Prodi } from './../models/prodi';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdiService {
  formData: { ProdiId: number; ProdiName: string; ChairmanProdi: string; };

  constructor(private http:HttpClient) { }
  readonly APIUrl ='http://localhost:55075/api/Prodi';

  getProList(): Observable<Prodi[]>{
    return this.http.get<Prodi[]>(this.APIUrl + '/AllProdis');
  }

  getSingleProList(id :number): Observable<Prodi[]>{
    return this.http.get<Prodi[]>(this.APIUrl + '/GetProdisById' + id);
  }

  addProdi(pro:Prodi){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post(this.APIUrl+'/InsertProdis', pro, httpOptions);
  }

  deleteProdi(id: number){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.delete(this.APIUrl+'/DeleteProdis?id='+id, httpOptions);
  }

  updateProdi(pro:Prodi){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.put(this.APIUrl+'/UpdateDepartments', pro, httpOptions);
  }

  private _listener = new Subject<any>();
  listen(): Observable<any>{
    return this._listener.asObservable();
  }

  filter(filterBy: string){
    this._listener.next(filterBy);
  }
}
