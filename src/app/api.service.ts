import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class ApiService{
  public baseUrl="https://dummyjson.com/users";
  constructor(private http:HttpClient){}
  getdetails(){
    return this.http.get(this.baseUrl);
  }
}