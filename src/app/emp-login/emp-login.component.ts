import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.scss']
})
export class EmpLoginComponent implements OnInit {
  email:String;
  psw:String;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  submit()
  {
    if(this.email=="abc" && this.psw=="123")
    {
      this.router.navigate(['emp-home'])
      console.log("Sucessfully")
      
    }else
    {
      window.alert("INVALID");
    }
  }
  
}
