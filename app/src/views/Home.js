import React, {Component} from 'react'
import Card from "react-bootstrap/Card";
import CardColumn from "react-bootstrap/CardColumns"
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import http from "../apis/http";

class Home extends Component {
	getTea =  () =>  http.get("earl-grey/")
		.then(reply => {console.log(reply)});
	componentDidMount() {
		this.getTea()

	}
	postTweet = async () => {
		let data = await http.get("tweet/");
		console.log(data)
	};

	render() {
		return (
			<div className="container">
				<CardColumn>
					<Card>
						<Card.Body>
							<Card.Title><FontAwesomeIcon icon="stroopwafel"/></Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of
								the card's content.
							</Card.Text>
							<Button onClick={this.postTweet} variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of
								the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of
								the card's content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</CardColumn>
			</div>
		);
	}
}

export default Home;
