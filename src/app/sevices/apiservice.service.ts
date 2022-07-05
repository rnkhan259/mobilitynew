import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  serverUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  requestViaGet(method) {
    return new Promise((resolve, reject) => {
      this.http.get(this.serverUrl + method)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  requestViaPost(method, data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.serverUrl + method, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  requestViaPatch(method, data) {
    return new Promise((resolve, reject) => {
      this.http.patch(this.serverUrl + method, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  requestViaDelete(method) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.serverUrl + method)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
