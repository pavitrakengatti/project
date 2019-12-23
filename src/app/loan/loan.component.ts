import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  submit(){
    this.router.navigate(['home'])
  }
}
