import {Component, OnInit} from "@angular/core";
import {Status} from "../classes/status";
import {ProfileService} from "../services/profile.service";
import {Profile} from "../classes/profile";
import {JwtHelperService} from "@auth0/angular-jwt";



@Component({
	template:`
	<h1>hello world</h1>
	
	`
})
export class ProfileComponent implements OnInit{

	profile: Profile = new Profile(null,null, null, null, null);
	status: Status = null;

	constructor(private profileService: ProfileService, private jwtHelper : JwtHelperService) {}

	ngOnInit(): void {
		this.currentlySignedIn()
	}

	currentlySignedIn() : void {
		const encodedJwt = localStorage.getItem('jwt-token');

		const decodedJwt = this.jwtHelper.decodeToken(encodedJwt);

		this.profileService.getProfile(decodedJwt.auth.profileId)
			.subscribe(profile => this.profile = profile)
	}


}