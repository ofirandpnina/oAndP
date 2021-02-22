import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userClasss } from '../class/userClasss';
import { users } from '../class/users';
import { DbService } from '../db.service';

@Component({
  selector: 'app-my-object',
  templateUrl: './my-object.component.html',
  styleUrls: ['./my-object.component.scss']
})
export class MyObjectComponent implements OnInit {

  user: users;
  arrClass: any[] = [];
  constructor(private db: DbService, private router: Router) {
    const stringUser = localStorage.getItem('user');
    this.user = JSON.parse(stringUser);
    this.db.GetUserClassImpByUserId(this.user.id).subscribe(data => {
      this.arrClass = data;
    });
  }

  ngOnInit(): void {
  }


  goToImp(imp) {
    const stringImp = JSON.stringify(imp);
    localStorage.setItem("selectedImp",stringImp);
    this.router.navigate(['imp-details']);
  }
}
