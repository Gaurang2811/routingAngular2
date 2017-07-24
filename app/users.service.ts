import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';

@Injectable()
export class UsersService {
  constructor(private http:Http) { }
  
  get(){
    return this.http.get('api/users.json')
      .delay(1000)
      .map(response => response.json())
      .retryWhen(errors => errors.delay(2000));
  }
}