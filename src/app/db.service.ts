import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { classes } from './class/classes';
import { userClasss } from './class/userClasss';

import { valuesShape } from './class/valuesShape';
import { users } from './class/users';
import { variables } from './class/variables';
import { userClassImp } from './class/userClassImp';
import {MenuItem} from 'primeng/api'; 
//import { httpFactory } from '@angular/http/src/http_module';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) {


  }

  getAllClassess(): Observable<classes[]> {

    return this.http.get<classes[]>("https://localhost:44363/api/classes_/Get");
  }

  // getAllClasses_variables():Observable<classes_variables[]>{

  //    return this.http.get<classes_variables[]>("/api/classes_variables_");
  //   }

  getAllUserClasss(): Observable<userClasss[]> {

    return this.http.get<userClasss[]>("/api/userClasss_");
  }

  getAllValuesShape(): Observable<valuesShape[]> {

    return this.http.get<valuesShape[]>("/api/valuesShape_");
  }
  getAllUsers(): Observable<users[]> {

    return this.http.get<users[]>("/api/users_");
  }
  getAllVariables(): Observable<variables[]> {

    return this.http.get<variables[]>("/api/variables_");
  }

  tryPostFunction() {
    console.log("tryPostFunction")
    return this.http.post("https://localhost:44363/api/userClasss_/addUsers", { "email": "zaava", "password": "123456" })
  }
  login(email: string, password: string) {
    console.log("login")
    return this.http.post("https://localhost:44363/api/users_/Login", { "email": email, "password": password });
  }
  register(user_name: string, email: string, password: string) {
    return this.http.post("https://localhost:44363/api/users_/AddUser", { "user_name": user_name, "email": email, "password": password })
  }


  getWeekStatistics(id): Observable<any[]> {
    return this.http.get<any[]>("https://localhost:44363/api/user_date_/GetWeekStatistics/" + id);
  }

  GetUserClassByUserId(id): Observable<userClasss[]> {
    return this.http.get<userClasss[]>("https://localhost:44363/api/userClasss_/GetUserClassByUserId/" + id);
  }

  GetUserClassImpByUserId(id):Observable<any[]>{
    return  this.http.get<any[]>("https://localhost:44363/api/userClassImp/GetUserClassImpByUserId/" + id);
  }

  addImp(imp: userClassImp): Observable<any> {
    return this.http.post("https://localhost:44363/api/userClassImp/AddImp", imp);
  }

updateLevel(user):Observable<any>{
  return this.http.put("https://localhost:44363/api/users_/UpdateLevel/"+user.id, user);
}

}
