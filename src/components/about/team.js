import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import '../../css/team.css';

function team(){
	const state = {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            },
        }
    }
	return(
	<div className="team-section">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="row teams">
						<OwlCarousel items={2}  
				          loop = {true}  
				          nav = {true} 
				          dots = {false}
				          autoplay ={true}
				          responsive={state.responsive}
				          margin={8} >  
						<div className="col-md-12">
							<div className="single-member">
								<img src="asset/images/team-2.jpg" alt="img" />
								<h3>Jessica Doe</h3>
								<p>CEO</p>
							</div>
						</div>
						<div className="col-md-12">
							<div className="single-member">
								<img src="asset/images/team-3.jpg" alt="img" />
								<h3>Chris Rose</h3>
								<p>Developer</p>
							</div>
						</div>
						<div className="col-md-12">
							<div className="single-member">
								<img src="asset/images/team-2.jpg" alt="img" />
								<h3>Jessica Doe</h3>
								<p>CEO</p>
							</div>
						</div>
					</OwlCarousel>
					</div>
				</div>
				<div className="col-md-6">
					<div className="team-title">
						<h3><span>Meet </span>Our Team</h3>
						<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit massa enim. Nullam id varius nunc.</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc. Vivamus bibendum magna ex, et faucibus lacus venenatis eget.</p>
					</div>
				</div>

			</div>
		</div>
	</div>
	);

}

export default team;