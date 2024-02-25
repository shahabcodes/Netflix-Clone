declare var google: any;
import { CommonModule } from '@angular/common';
import { Component, NgZone, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  private ngZone = inject(NgZone);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '419088581174-ke8uo7qm43il3vgqvfn8ptofohac5973.apps.googleusercontent.com',
      callback: (resp: any) => {
        console.log(resp);
        this.handleLogin(resp);
      }
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350
    });
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(response: any) {
    // use ngZone.run while using a third party service
    this.ngZone.run(() => {
      if (response) {
        //decode the token
        const payLoad = this.decodeToken(response.credential);
        //store in session
        sessionStorage.setItem("loggedInUser", JSON.stringify(payLoad));
        //navigate to home/browse
        this.router.navigate(['browse'])
      }
    });
  }
}
