import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
    http service
*/
@Injectable()
export class HttpService {

  constructor(
      private http: Http
  ) {}

  /*
    post
  */
  post(url,param){
      let promise = new Promise((resolve,reject) => {
          let body = JSON.stringify(param);
          let headers = new Headers({'Content-type' : 'application/json'});

          this.http.post(url,body,{headers:headers}).map(response => response.json())
          .subscribe(
              data => {
                  resolve(data);
              },
              error => {
                  reject(error);
              }
          );
      });

      return promise;
  }

  /*
    get
  */
  get(url,param){
      let promise = new Promise((resolve,reject) => {
          let keys = Object.keys(param);
          let headers = new Headers({'Content-type' : 'application/json'});

          //generate query string
          if(keys.length > 0){
            url += '?';
            for(let key of keys){
                url += key;
                url += '=';
                url += param[key];
                url += '&';
            }
            url = url.substr(0,url.length-1);
          }

          this.http.get(url,{headers:headers})
          .map(response => response.json())
          .subscribe(
                data => {
                    resolve(data);
                },
                error => {
                    reject(error);
                }
            )
        });

      return promise;
  }

  /*
    put
  */
  put(url,param){
        let promise = new Promise(
            (resolve,reject) => {
                let body = JSON.stringify(param);//pk를 제외한 파라미터는 body에 심기
                let headers = new Headers({'Content-Type':'application/json'});

                this.http.put(url,body,{headers:headers})
                .map(response => response.json())
                .subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
            }
        );
        return promise;
  }

  /*
    delete
  */
  delete(url,param){
      let promise = new Promise(
          (resolve,reject) => {
              let headers = new Headers({'Content-Type':'application/json'});
              let keys = Object.keys(param);

              //generate query string
              if(keys.length > 0){
                url += '?';
                for(let key of keys){
                    url += key;
                    url += '=';
                    url += param[key];
                    url += '&';
                }
                url = url.substr(0,url.length-1);
              }
              
              this.http.delete(url,{headers:headers})
              .map(response => response.json())
              .subscribe(
                    data => {
                        resolve(data["result"]);
                    },
                    error => {
                        reject(error);
                    }
                );
          }
      )

      return promise;
  }
}
