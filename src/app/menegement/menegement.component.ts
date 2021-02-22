import { Component, OnInit } from '@angular/core';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-menegement',
  templateUrl: './menegement.component.html',
  styleUrls: ['./menegement.component.scss']
})
export class MenegementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
