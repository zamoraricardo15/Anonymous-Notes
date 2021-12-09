import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getNotes(){
    return this.http.get("/notes");
  }

  createNote(data) {
    return this.http.post("/notes", data);
  }
}
