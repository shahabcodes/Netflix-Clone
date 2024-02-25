import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent {
  auth = inject(AuthService);
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  signOut(){
    this.auth.signOut();
  }
}
