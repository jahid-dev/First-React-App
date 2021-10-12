import React, {Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

import '../../css/client.css'; 
function client(){

	const state = {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        }
    }

	return(
	<div className="client-section">
		<div className="container">
			<div className="row">
				<div className="offset-md-2 col-md-8">
					<div className="client-title text-center">
						<h2>Top clients</h2>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nostrum molestiae dolorum quibusdam sed consequatur ea exercitationem architecto soluta inventore explicabo, facilis dolor consectetu</p>
					</div>
				</div>
				<div className="col-md-12">
					<OwlCarousel items={5}  
			          className="clients"  
			          loop = {true}  
			          nav = {false} 
			          dots = {false}
			          autoplay ={true}
			          responsive={state.responsive}
			          margin={8} >  
						<img src="asset/images/brand-01.png" alt="img" />
					</OwlCarousel>
					
				</div>
			</div>
		</div>
	</div>
	);
}
export default client;