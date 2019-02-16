import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}

	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div className="projects-grid">
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'white',
								height: '176px',
								background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'
							}}
						>
							React Project #1
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis ornare justo. Etiam
							ultricies elit feugiat lacinia porttitor. Donec non luctus turpis
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'white',
								height: '176px',
								background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'
							}}
						>
							React Project #2
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis ornare justo. Etiam
							ultricies elit feugiat lacinia porttitor. Donec non luctus turpis
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'white',
								height: '176px',
								background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'
							}}
						>
							React Project #3
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis ornare justo. Etiam
							ultricies elit feugiat lacinia porttitor. Donec non luctus turpis
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 1) {
			return (
				<div>
					<h1>This is Angular</h1>
				</div>
			);
		} else if (this.state.activeTab === 2) {
			return (
				<div>
					<h1>This is PHP</h1>
				</div>
			);
		} else if (this.state.activeTab === 3) {
			return (
				<div>
					<h1>This is Web</h1>
				</div>
			);
		} else if (this.state.activeTab === 4) {
			return (
				<div>
					<h1>This is Mongo DB</h1>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>React</Tab>
					<Tab>Angular</Tab>
					<Tab>PHP</Tab>
					<Tab>Web</Tab>
					<Tab>MongoDB</Tab>
				</Tabs>

				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Projects;
