import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { classes } from './class/classes';
import { classes_variables } from './class/classes_variables';
import { userClasses_variablas } from './class/userClasses_variablas';
import { userClasss } from './class/userClasss';
import { userObject } from './class/userObject';
import { valuesShape } from './class/valuesShape';
import { users } from './class/users';
import { variables } from './class/variables';
//import { httpFactory } from '@angular/http/src/http_module';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http:HttpClient) { 


  }

  getAllClassess():Observable<classes[]>{

   return this.http.get<classes[]>("/api/classes_");
  }
  
  getAllClasses_variables():Observable<classes_variables[]>{

    return this.http.get<classes_variables[]>("/api/classes_variables_");
   }
   getAllUserClasses_variablas():Observable<userClasses_variablas[]>{

    return this.http.get<userClasses_variablas[]>("/api/userClasses_variablas_");
   }
   getAllUserClasss():Observable<userClasss[]>{

    return this.http.get<userClasss[]>("/api/userClasss_");
   }
   getAllUserObject():Observable<userObject[]>{

    return this.http.get<userObject[]>("/api/userObject_");
   }
   getAllValuesShape():Observable<valuesShape[]>{

    return this.http.get<valuesShape[]>("/api/valuesShape_");
   }
   getAllUsers():Observable<users[]>{

    return this.http.get<users[]>("/api/users_");
   }
   getAllVariables():Observable<variables[]>{

    return this.http.get<variables[]>("/api/variables_");
   }

   tryPostFunction(){
     return this.http.post("https://localhost:44363/api/userClasss_/addUsers",null)
   }
}
