import { importType } from '@angular/compiler/src/output/output_ast';
import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { users } from '../class/users';
import { FormControl, Validators } from '@angular/forms';
import { DbService } from '../db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sighn-in',
  templateUrl: './sighn-in.component.html',
  styleUrls: ['./sighn-in.component.css']
})
export class SighnInComponent implements OnInit {
  hide: boolean = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  //!!!!!!!!!!!!!!!!!!!!!binding
  emailAddress: string = "pnina12q@gmail.com";
  password: string = "1234324565476545q";
  constructor(private dbService: DbService, private router: Router) {

  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  logIn() {
    //string strUser = JSON.stringify(this.user);
   //localStorage.setItem("user", );  
    this.dbService.login(this.emailAddress, this.password).subscribe(
      user => {
        console.log("returned user " + user);
        if (user != null) {
          this.router.navigate(["my-profile"])
        }
      }
    );
  }
  ngOnInit() {
  }

}
