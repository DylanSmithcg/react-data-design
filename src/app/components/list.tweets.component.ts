import {Component, OnInit} from "@angular/core";
import {TweetService} from "../services/tweet.service";
import {Status} from "../classes/status";
import {Tweet} from "../classes/tweet";
import {ProfileService} from "../services/profile.service";
import {Profile} from "../classes/profile";
import {FormBuilder, FormGroup, Validators} from "@angular/forms"



@Component({
	selector: "list-tweet",
	templateUrl: "./templates/list-tweets.html"
})

export class ListTweetsComponent implements OnInit{

	createTweetForm: FormGroup;


	profile: Profile = new Profile(null,null,null,null,null);

	//declare needed state variables for latter use
	status: Status = null;

	tweet: Tweet = new Tweet(null,null,null,null);

	tweets: Tweet[] = [];


	constructor(private tweetService: TweetService, private profileService: ProfileService, private formBuilder: FormBuilder) {}

	//life cycling before my eyes
	ngOnInit() : void {
		this.listTweets();

		this.createTweetForm = this.formBuilder.group({
			tweetContent: ["",[Validators.maxLength(140), Validators.required], [Validators.minLength(1), Validators.required()]]
		});
	}

	getTweetProfile(): void {
		this.profileService.getProfile(this.tweet.tweetProfileId)
	}


	listTweets(): void {
		this.tweetService.getAllTweets()
			.subscribe(tweets => this.tweets = tweets);
	}
	createTweet(): void  {
		this.tweetService.createTweet(this.tweet)
			.subscribe(status =>{
				this.status = status;
				if(this.status.status ===200) {
					this.createTweetForm().reset();
					this.listTweets();
				}
			});
	}


}