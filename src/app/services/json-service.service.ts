import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  constructor(private http:HttpClient) { }

  getCities() :Observable<any>{
    return this.http.get("./assets/json/cities-israel.json");
  }

  getLessonss():Observable<any>{
    return this.http.get("./assets/json/lessons.json");
  }

}
