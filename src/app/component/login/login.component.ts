import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  onSubmit():void{

    if( email == "sairam" && password == "Asd123"){
      
      console.log("admin verified");
      window.alert("Admin login successfull");
    }
    else if(usertype=="user"){

      console.log("user verified");
      window.alert("User login successfull");
    }
    else{

      this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
    }

  }

  show2(){
    this.router.navigateByUrl("user");
  }

  // show3(){
  //   this.router.navigateByUrl("");
  // }

}
