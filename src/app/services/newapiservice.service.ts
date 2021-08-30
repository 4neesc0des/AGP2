import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewapiserviceService {

  constructor(private _http: HttpClient) { }

  // newsapi
  getHeading(): Observable<any> {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=64bcb07d66a84003856aec81fe783a7f";
    return this._http.get<any>(url)
  }

  // newsapi
  getTech(): Observable<any> {
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=64bcb07d66a84003856aec81fe783a7f";
    return this._http.get<any>(url)
  }

  // buznews
  getBuz(): Observable<any> {
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=64bcb07d66a84003856aec81fe783a7f";
    return this._http.get<any>(url)
  }

  getSport(): Observable<any> {
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=64bcb07d66a84003856aec81fe783a7f";
    return this._http.get<any>(url)
  }
}
