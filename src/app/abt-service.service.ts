import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AbtServiceService {

  constructor(private http: HttpClient) {   }
    getdata(){
     return {
       servName:"ServiceName", 
        id:24
       }
     }
  getApi(){
    let url="https://jsonplaceholder.typicode.com/posts";
    return this.http.get(url);
  }
}
