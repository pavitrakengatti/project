import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
accNo:number;
amt:number;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  submit1()
  {
    if(this.accNo==null || this.amt==null)
    {
      window.alert("Please enter account number and amount");
    }
    else
    {
      this.router.navigate(['fund-transfer'])
      window.alert("Sucessfully Transfered");
      console.log("Sucessfully")
  }
}
 
submit2()
  {
    
      this.router.navigate(['fund-transfer'])
      
  }
  submit() 
  {
    this.router.navigate(['fund-transfer'])
  }
}    
  

