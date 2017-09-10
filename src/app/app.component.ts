import { Component } from '@angular/core';
import { HttpService } from './http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = "";
  param = {};

  constructor(
      private httpService:HttpService
  ){}

  callGET(){
      this.httpService
      .get(this.url,this.param)
      .then(
          data => {
              console.log(data);
          }
      )
      .catch(
          error => {
              console.log(error);
          }
      );
  }

  callPost(){
      this.httpService
      .post(this.url,this.param)
      .then(
          data => {
              console.log(data);
          }
      )
      .catch(
          error => {
              console.log(error);
          }
      );
  }

  callPut(){
      this.httpService
      .put(this.url,this.param)
      .then(
          data => {
              console.log(data);
          }
      )
      .catch(
          error => {
              console.log(error);
          }
      );
  }

  callDelete(){
      this.httpService
      .delete(this.url,this.param)
      .then(
          data => {
              console.log(data);
          }
      )
      .catch(
          error => {
              console.log(error);
          }
      );
  }
}
