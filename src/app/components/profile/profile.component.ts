import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	profile:any;

  constructor(public auth: AuthService) { 
  		this.profile =JSON.parse(localStorage.getItem('profile'));
  		console.log(this.profile);
  	}

  ngOnInit() {

  	if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }
  

}
