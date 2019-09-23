import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  username: string = "";
  password: string = "";
  // data: any = {valid: "ok"};
  
  constructor() { }
  
  ngOnInit() {
  }
  
  onSubmit(form: NgForm) {
    
  }
  
  check(){
    
    console.log(this.username, this.password);
    
  }
  
}
