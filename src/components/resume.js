import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{ textAlign: 'center' }}>
							<img
								src="http://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
								alt="avatar"
								style={{ height: '200px' }}
							/>
						</div>
						<h2 style={{ paddingTop: '2em' }}>Tito Parra</h2>
						<h4 style={{ color: 'grey' }}>Programer</h4>
						<hr style={{ borderTop: '3px solid #02b875', width: '50%' }} />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate orci tellus. Praesent
							viverra nisi eu lectus aliquam cursus. Suspendisse et enim a lectus posuere ornare. Nunc
							sapien elit, placerat at dolor non, placerat varius nulla. Aliquam nec varius lorem, at
							sagittis nunc.
						</p>
						<hr style={{ borderTop: '3px solid #02b875', width: '50%' }} />
						<h5>Address</h5>
						<p>Wrzeciono Warszawa, Poland</p>
						<h5>Phone</h5>
						<p>(+48) 508 797 983</p>
						<h5>Email</h5>
						<p>tito.parra4@hotmail.com</p>
						<h5>Web</h5>
						<p>https://titoparra.com</p>
						<hr style={{ borderTop: '3px solid #02b875', width: '50%' }} />
					</Cell>
					<Cell className="resume-right-col" col={8}>
						Right side
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
