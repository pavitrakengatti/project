import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  submit(){
    this.router.navigate(['home'])
  }
}
