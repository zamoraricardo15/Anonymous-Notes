import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  note = {
    post: ''
  }
  notes: any;
  errors: any;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(){
    console.log("Got the notes!")
    this.httpService.getNotes().subscribe(data=>{
      this.notes = data;
    })
  }

  createNote(){
    console.log("Create Note!")
    this.httpService.createNote(this.note).subscribe(data=>{
      console.log('data', data)
      if (data['errors']) {
        this.errors = data['errors'];
      } else {
        console.log("Success!")
        this.note = { post: ""};
        this.getNotes();
      }
    
  })
  }


}
