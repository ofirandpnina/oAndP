import { Component, OnInit } from '@angular/core';
//import { FormControl, Validators } from '@angular/forms';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from 'src/app/db.service';
@Component({
  selector: 'app-sighnup',
  templateUrl: './sighnup.component.html',
  styleUrls: ['./sighnup.component.scss']
})
export class SighnupComponent implements OnInit {
  hide: boolean = true;

  public form: FormGroup = new FormGroup({
    password: new FormControl('',),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    user_name: new FormControl(''),
  });

  constructor(private serv: DbService, private router: Router) { }
  getErrorMessage() {
    if (this.form.value.emailAddress.hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.value.emailAddress.hasError('email') ? 'Not a valid email' : '';
  }
  sighnUp() {
    const user_name = this.form.value.user_name;
    const emailAddress = this.form.value.emailAddress;
    const password = this.form.value.password;
    console.log(user_name, emailAddress, password);
    this.serv.register(user_name, emailAddress, password).subscribe(user => {
      console.log("registered", user);

      if (user != null) {
        //כשרוצים לשמור ללוקל סטורג'
        const stringUser = JSON.stringify(user);
        localStorage.setItem('user', stringUser);
        //שמירה של זמן כניסה
        const startTime = new Date();
        console.log("startTime is: " + startTime);
        const stringStartTime = JSON.stringify(startTime);
        localStorage.setItem("startTime", stringStartTime);
        //ניתוב לדף הפרופיל
        this.router.navigate(["my-profile"]);
      }
      else
        alert("שגיאה ברישום");

      this.router.navigate(["my-profile"]);
    })


  }
  ngOnInit(): void {
  }

}
