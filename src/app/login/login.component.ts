import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 email:String;
 psw:String;
  constructor(private router:Router) { }

  ngOnInit() {
  }
submit()
{
  if(this.email=="abc" && this.psw=="123")
  {
    this.router.navigate(['home'])
    console.log("Sucessfully")
    
  }else
  {
    window.alert("INVALID");
  }
}

}
