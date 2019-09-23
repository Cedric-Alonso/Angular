import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { Config } from 'protractor';
import { config } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  
  users: any
  errorMessage: string
  
  constructor(private apiCallService: ApiCallService) {

   }
  
  ngOnInit() {
    this.showUsers();
  }
  
  showUsers(){
    this.apiCallService.getUsers(null, '5d67c95494505100159c3a4d')
    .subscribe((data: Config) => {
      this.users = {
        id: data['id'],
        name: data['name'],
        picture: data['picture'],
        role: data['role'],
      }
      
    },
    error => {
      this.errorMessage = error.message
    })
  }
  
}
