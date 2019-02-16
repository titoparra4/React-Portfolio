import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Tito Parra</h2>
						<img
							src="http://aboullaite.me/content/images/2016/11/myAvatar.svg"
							alt="avatar"
							style={{ height: '250px' }}
						/>
						<p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis ornare justo. Etiam
							ultricies elit feugiat lacinia porttitor. Donec non luctus turpis. Nullam porta est suscipit
							ligula pulvinar, quis elementum nunc ultrices. Vivamus magna nunc, iaculis sit amet ex et,
							finibus tristique dolor.{' '}
						</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr />

						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i className="fa fa-phone-square" aria-hidden="true" />
										(+48) 508 797 983
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i className="fa fa-laptop" aria-hidden="true" />
										https://titoparra.com
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i className="fa fa-envelope" aria-hidden="true" />
										tito.parra4@hotmail.com
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i className="fa fa-skype" aria-hidden="true" />
										@tito.parra4
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;
