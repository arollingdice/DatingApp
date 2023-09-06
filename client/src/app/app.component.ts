import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Dating app';
  users: any;//(turning off typescript for now)

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      // `next` here is to specify what are going to do
      // once we get the (streams of )object from HTTP get request 
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }

}
