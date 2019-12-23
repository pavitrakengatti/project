import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  submit() 
  {
    this.router.navigate(['login'])
  }
  submit1() 
  {
    this.router.navigate(['emp-login'])
  }
}
