import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClick() {
    return console.log('Service Data: Clicked');
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  getUsersByPage(page: number) {
    return this.http.get('https://reqres.in/api/users?page=' + page);
  }
}
