import React, { Component } from 'react';

import '../../css/services.css';

function services(){
	return(
	<div className="services-section">
		<div className="container">
			<div className="row">
				<div className="offset-md-2 col-md-8">
					<div className="sevices-title text-center">
						<h2>Services</h2>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum facere ipsam ut aspernatur rem perferendis ea autem minus odio, in ratione possimus veritatis</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<div className="single-service text-center">
						<i className="fa fa-desktop"></i>
						<h3>Web Design</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. In, deserunt, quia dignissimos sint omnis sed error</p>
						<a href="#">Read More</a>
					</div>
				</div>
				<div className="col-md-4">
					<div className="single-service text-center">
						<i className="fa fa-wordpress"></i>
						<h3>WordPress Service</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. In, deserunt, quia dignissimos sint omnis sed error</p>
						<a href="#">Read More</a>
					</div>
				</div>
				<div className="col-md-4">
					<div className="single-service text-center">
						<i className="fa fa-shopping-cart"></i>
						<h3>E-commerce Website</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. In, deserunt, quia dignissimos sint omnis sed error</p>
						<a href="#">Read More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
}
export default services;