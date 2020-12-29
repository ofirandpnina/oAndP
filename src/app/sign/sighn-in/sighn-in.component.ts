import { importType } from '@angular/compiler/src/output/output_ast';
import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { users } from '../../class/users';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbService } from '../../db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sighn-in',
  templateUrl: './sighn-in.component.html',
  styleUrls: ['./sighn-in.component.css']
})
export class SighnInComponent implements OnInit {
  hide: boolean = true;
  //!!!!!!!!!!!!!!!!!!!!!binding
  emailAddress: string = "pnina12q@gmail.com";
  password: string = "1234324565476545q";
  public form: FormGroup = new FormGroup({
    password: new FormControl('',),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private dbService: DbService, private router: Router) {

  }
  getErrorMessage() {
    if (this.form.value.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.value.emailAddress.hasError('email') ? 'Not a valid email' : '';
  }

  logIn() {
    //string strUser = JSON.stringify(this.user);
    //localStorage.setItem("user", );  
    const password = this.form.value.password;
    const email = this.form.value.emailAddress;

    this.dbService.login(email, password).subscribe(
      user => {
        console.log("returned user " + user);
        if (user != null) {
          //כשרוצים לשמור ללוקל סטורג'
          const stringUser = JSON.stringify(user);
          localStorage.setItem('user', stringUser);
          this.router.navigate(["my-profile"]);
        }
        else
          alert("שם משתמש או סיסמא שגויים ");
      }
    );
    //למחוק!!!!!!!!!!!!!!!!! רק לתצוגה
  }
  ngOnInit() {
  }

}
