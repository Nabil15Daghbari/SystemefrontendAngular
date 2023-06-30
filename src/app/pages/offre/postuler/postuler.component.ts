import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {

  uploadedFiles: any[] = [];



  constructor(private messageService: MessageService) {}

  onUpload(event: { files: any; }) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }
      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  ngOnInit(): void {
  }



 

}
