import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  submit(){
    window.confirm("Do You Want Logout? Sure!!!")
    this.router.navigate(['login'])
    window.alert("Successfully Logout!!!")
  }
}
