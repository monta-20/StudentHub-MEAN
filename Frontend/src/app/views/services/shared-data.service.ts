import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  //Authorization and admin
  token:any = localStorage.getItem('token')

  headerAdmin = new HttpHeaders()
  .set('authorization',this.token)
  .set('role','Admin')
  
  headerall = new HttpHeaders()
  .set('authorization',this.token)
  constructor(private _http:HttpClient) {}

  getAllstudents(){
    return this._http.get(`${environment.urlBackend}`+'students/',{headers:this.headerall})
  }
  addstudents(profil:any){
    return this._http.post(environment.urlBackend+'addstudent/',profil,{headers:this.headerAdmin}) 
  }
  deletestudents(id:any){
    return this._http.delete(environment.urlBackend+'students/'+id,{headers:this.headerAdmin})
  }
  updatestudents(id:any,newProfil:any){
    return this._http.patch(environment.urlBackend+'students/'+id,newProfil,{headers:this.headerAdmin})
  }
  getOnestudent(id:any){
    return this._http.get(environment.urlBackend+'students/'+id ,{headers:this.headerall})
  }
}
