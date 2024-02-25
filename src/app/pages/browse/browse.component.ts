import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from 'src/app/core/components/banner/banner.component';

@Component({
  standalone: true,
  selector: 'app-browse',
  imports: [CommonModule, HeaderComponent, BannerComponent],
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
