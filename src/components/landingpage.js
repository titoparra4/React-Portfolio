import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src="http://aboullaite.me/content/images/2016/11/myAvatar.svg"
							alt="avatar"
							className="avatar-img"
						/>

						<div className="banner-text">
							<h1>Full Stack Web Developer</h1>

							<hr />

							<p>
								HTML/CSS | Boostrap | Javascript | React | React Native | PHP | ASP.Net Core | SQL/MySQL
							</p>
							<div className="social-links">
								{/* Linkedin */}
								<a href="https://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>

								{/* Github */}
								<a href="https://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>

								{/* Freecodecamp */}
								<a href="https://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-free-code-camp" aria-hidden="true" />
								</a>

								{/* Youtube */}
								<a href="https://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-youtube-square" aria-hidden="true" />
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Landing;
