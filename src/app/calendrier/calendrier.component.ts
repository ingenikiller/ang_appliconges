import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit {

  constructor(
  private router: Router
) { }

  ngOnInit() {}
  
  getLogin() {
  return JSON.parse(localStorage.getItem('user')).login;
}

logout() {
  console.log('Tentative de déconnexion');

  localStorage.removeItem('user');
  this.router.navigate(['/login']);
}

}