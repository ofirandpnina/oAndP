import { Component, OnInit } from '@angular/core';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addobject',
  templateUrl: './addobject.component.html',
  styleUrls: ['./addobject.component.scss']
})
export class AddobjectComponent implements OnInit {
  uploadedFiles: any[] = [];
  constructor() { }
  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }


 
}

  ngOnInit(): void {
  }

}
