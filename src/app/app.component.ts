import { Component, OnInit } from '@angular/core';
import { FirestoreService } from './services/firestore/firestore.service';
import { HttpRequestService } from './services/http/http-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private httpClient:HttpRequestService){}
  ngOnInit(): void {
      this.httpClient.addCards();
  }
  title = 'yugiohcardstore';
}
