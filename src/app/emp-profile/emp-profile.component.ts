import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.scss']
})
export class EmpProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login()
  {
    
      this.router.navigate(['emp-home'])
     
      
    }
}
