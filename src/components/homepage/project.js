import React, {Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import '../../css/project.css';

function project(){

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
                items: 3,
            },
        }
    }


	return(
	<div className="project-section">
		<div className="container">
			<div className="row">
				<div className="offset-md-2 col-md-8">
					<div className="project-title text-center">
						<h2>Some of our Recent Works</h2>
						<p>Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus iure reiciendis qui in deleniti soluta sunt nemo porro nostrum explicabo eius, autem velit eveniet voluptate</p>
					</div>
				</div>

				<div className="col-md-12">
					<OwlCarousel items={3}  
			          className="projects"  
			          loop = {true}  
			          nav = {false} 
			          autoplay ={true}
			          responsive ={state.responsive}
			          margin={8} >  
						<div className="col-md-12">
							<div className="single-project">
								<img src="asset/images/portfolio-big-01.jpg" alt="img" />
								<div className="porject-overley">
									<a href="#">
										<p>Product Design</p>
										<h3>App Development</h3>
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-12">
							<div className="single-project">
								<img src="asset/images/portfolio-big-01.jpg" alt="img" />
								<div className="porject-overley">
									<a href="#">
										<p>Product Design</p>
										<h3>App Development</h3>
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-12">
							<div className="single-project">
								<img src="asset/images/portfolio-big-01.jpg" alt="img" />
								<div className="porject-overley">
									<a href="#">
										<p>Product Design</p>
										<h3>App Development</h3>
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-12">
							<div className="single-project">
								<img src="asset/images/portfolio-big-01.jpg" alt="img" />
								<div className="porject-overley">
									<a href="#">
										<p>Product Design</p>
										<h3>App Development</h3>
									</a>
								</div>
							</div>
						</div>
					</OwlCarousel>
				</div>
			</div>
		</div>
	</div>
	);
}
export default project;