import React, {Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

import '../../css/testimonial.css'; 

function testimonial(){
	return(
	<div className="testimonial-section">
		<div className="container">
			<div className="row">
				<div className="offset-md-2 col-md-8">
					<div className="testimonial-title text-center">
						<h2>Client Testimonial</h2>
					</div>
				</div>
				<div className="offset-md-2 col-md-8">
					<OwlCarousel items={1}  
			          className="clients"  
			          loop = {true}  
			          nav = {true} 
			          dots = {false}
			          autoplay ={true}
			          margin={8} >  
						<div className="single-testimonail text-center">
							<img src="asset/images/user.jpg" alt="img" />
							<h3>Maria Osaka</h3>
							<p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa, ad odit tempore impedit consectetur magnam cumque, molestias adipisci accusamus. Ab non aliquid optio qui nisi soluta debitis enim possimus. "</p>
						</div>
						<div className="single-testimonail text-center">
							<img src="asset/images/5-1-1.jpg" alt="img" />
							<h3>James Anderson</h3>
							<p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa, ad odit tempore impedit consectetur magnam cumque, molestias adipisci accusamus. Ab non aliquid optio qui nisi soluta debitis enim possimus. "</p>
						</div>
						</OwlCarousel>
					
				</div>
			</div>
		</div>
	</div>
	);
}
export default testimonial;