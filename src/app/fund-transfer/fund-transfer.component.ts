import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.scss']
})
export class FundTransferComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
submit1(){
  this.router.navigate(['mobile'])
}
submit2(){
  this.router.navigate(['account'])
}
submit(){
  this.router.navigate(['home'])
}
}
