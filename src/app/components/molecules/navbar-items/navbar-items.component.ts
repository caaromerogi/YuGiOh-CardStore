import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar-items',
  templateUrl: './navbar-items.component.html',
  styleUrls: ['./navbar-items.component.scss']
})
export class NavbarItemsComponent {
  constructor(private authService:AuthService){}

  //Comes from the service
  isLoggedIn?:boolean;
}
