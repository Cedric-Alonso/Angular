import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  
  constructor(private httpClient: HttpClient) { }
  
  ApiUrl = 'https://daily-standup-campus.herokuapp.com/api/'

  login(username: string, password: string){
    const login = {
      username: username,
      password: btoa(password)
    }
    const options = this.createBasicHeader(login.username, login.password)
    this.httpClient.post<any>(this.ApiUrl + '/auth', login).pipe(
      // catchError(this.handleError('login',[])),
      tap(user => {
        if (user){
          user.authdata = window.btoa(login.username+':'+login.password);
          localStorage.setItem('currentUser', JSON.stringify(user))
        }
        return user;
      })
    )
  // this.httpClient.post('https://daily-standup-campus.herokuapp.com/api/auth', null, options).subscribe(
  // () => {
    
  // }
  // )
}

getUsers(token: string, id: string){
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjdjOTU0OTQ1MDUxMDAxNTljM2E0ZCIsImlhdCI6MTU2NzA4MjgzNn0.KmBSqWdq5YA7VJ9eAI4f4gyahUqEBAR9u9R_f0zEhE4'
  const options = this.createTokenHeader(token)
  // console.log(options)
  return this.httpClient.get(this.ApiUrl+'users/'+ id, options)
}

createBasicHeader(login: string, password: any){
  return {headers: new HttpHeaders({
    'content-type': 'application/json',
    'Authorization':'Basic '+btoa(login+':'+password)
  })}
}
createTokenHeader(token: string){
  return {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Authorization':'Bearer '+ token
    })
  }
}

createBearerHeader(login: string, password: any){
  return {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Authorization':'Basic '+btoa(login+':'+password)
    })
  } 
}

}
