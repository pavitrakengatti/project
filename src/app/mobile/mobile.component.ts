import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
  mobileNo:number;
  amt:number;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  submit1()
  {
    if(this.mobileNo==null || this.amt==null)
    {
      window.alert("Please enter account number and amount.");
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
