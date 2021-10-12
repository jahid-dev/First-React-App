import React from 'react';
import '../../css/contactinfo.css';
function contactinfo (){

	return(
		<div>
			<div className="contact-infobox">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="single-ct text-center">
								<i className="fa fa-phone"></i>
								<p>1038209282329</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-ct text-center">
								<i className="fa fa-envelope"></i>
								<p>info@yourmail.com</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="single-ct text-center">
								<i className="fa fa-map-marker"></i>
								<p>Uttara</p>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-12">
							<div className="contact-form">
								<div className="row">
									<div className="col-md-4">
										<input type="text" className="form-control" placeholder="Name" />
									</div>
									<div className="col-md-4">
										<input type="email" className="form-control" placeholder="Email" />
									</div>
									<div className="col-md-4">
										<input type="text" className="form-control" placeholder="Subject" />
									</div>
									<div className="col-md-12">
										<textarea className="form-control" placeholder="Message"></textarea>
									</div>
									<div className="col-md-12 text-center">
										<button className="btn btn-primary btn-sm" type="submit">Submit</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

}

export default contactinfo;