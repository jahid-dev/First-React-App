import React, { Component } from 'react';
import '../../css/welcome.css';

function welcome(){

	return(
	<div className="about-us">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div className="about-us-content">
						<h2>Who we Are</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laudantium explicabo culpa perferendis, esse qui quaerat corrupti unde, sapiente architecto cumque quia. Obcaecati inventore et nemo eligendi reiciendis quam accusamus?
						Sit accusantium, beatae nulla expedita eveniet eum molestiae aperiam ex doloribus minus, aliquid ea natus nam alias totam in repudiandae necessitatibus quam dolorum quaerat fugit impedit vero, animi reprehenderit. Velit!
						Tenetur itaque quisquam optio maiores repellendus officiis, praesentium iusto aperiam quae provident assumenda commodi tempora incidunt, debitis ipsam facilis alias. Et nam, iure sint iusto, numquam maiores corporis minima quasi.</p>
					</div>
				</div>
				<div className="col-md-6">
					<div className="about-us-content">
						<div className="first">
							<img src="asset/images/generic-corporate-3-2-full.jpg" alt="about" />
						</div>
						<div className="second">
							<img src="asset/images/generic-corporate-3-2-full.jpg" alt="about" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	);

}

export default welcome;