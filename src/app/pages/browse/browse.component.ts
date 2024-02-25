import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from 'src/app/core/components/banner/banner.component';
import { MovieService } from 'src/app/shared/services/movie.service';
import { MovieCarouselComponent } from 'src/app/shared/components/movie-carousel/movie-carousel.component';
import { IVideoContent } from 'src/app/shared/models/video-content.interface';

@Component({
  standalone: true,
  selector: 'app-browse',
  imports: [CommonModule, HeaderComponent, BannerComponent, MovieCarouselComponent],
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  auth = inject(AuthService);
  movieService = inject(MovieService);
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;

  popularMovies: IVideoContent[] = [];


  ngOnInit(): void {
    this.movieService.getMovies().subscribe(res =>{
      console.log(res);
      this.popularMovies = res.results;
    })
  }

  signOut(){
    this.auth.signOut();
  }
}
