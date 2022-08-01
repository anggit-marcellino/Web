import { Prodi } from './../models/prodi';
import { Mahasiswa } from './../models/mahasiswa';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {

  formData: Mahasiswa;
  constructor(private http:HttpClient) { }

  readonly APIUrl = 'http://localhost:55075/api/Mahasiswa';

  getMhsList(): Observable<Mahasiswa[]>{
    return this.http.get<Mahasiswa[]>(this.APIUrl + '/AllMahasiswas');
  }

  getSingleMhsList(id: number): Observable<Mahasiswa[]>{
    return this.http.get<Mahasiswa[]>(this.APIUrl + '/GetMahasiswasById/' + id)
  }

  addMahasiswa(mhs:Mahasiswa){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post(this.APIUrl+'/InsertMahasiswas', mhs, httpOptions);
  }

  updateMahasiswa(mhs:Mahasiswa){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.put(this.APIUrl+'/UpdateMahasiswas', mhs,httpOptions);
  }

  deleteMahasiswa(id: number){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.delete(this.APIUrl+'/DeleteMahasiswas?id='+ id, httpOptions);
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
