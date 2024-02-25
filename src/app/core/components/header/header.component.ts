import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  //For capturing the image from browse component
  @Input({required: true}) userImg: string = '';
  @Input({required: true}) userName: string = '';
  firstName: string = '';
  navList = ["Home", "TV Shows", "News & Popular", "My List", "Browse by Language"]

  ngOnInit() {
    this.firstName = this.userName.split(' ')[0];
    // Now firstName contains only the first name
}
}
