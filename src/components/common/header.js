import React from 'react';
import { Link } from 'react-router-dom';
function header(){
	return(
		<div className="header-area">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<nav className="navbar navbar-expand-lg">
						<Link to="/" className="navbar-brand">
						  	<img src="asset/images/logo.png" alt="logo" />
						  </Link>
						  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						    <i className="fa fa-bars"></i>
						  </button>

						  <div className="collapse navbar-collapse" id="navbarSupportedContent">
						    <ul className="navbar-nav ml-auto">
						      <li><Link to="/">Home</Link></li>
						      <li><Link to="/about">About Us</Link></li>
						     <li><Link to="/team">Team</Link></li>
						      <li className="dropdown-effect"><a href="#">Services<i className="fa fa-angle-down"></i></a>
						      	<ul>
						      		<li><a href="#">PSD to HTML</a></li>
						      		<li><a href="#">WordPress</a></li>
						      		<li><a href="#">Laravel</a></li>
						      	</ul>
						      </li>
						      <li><a href="#">Eduction</a></li>
						      <li><a href="#">Blog</a></li>
						      <li><Link to="/contact">Contact</Link></li>
						      <li><a href="#"><i className="fa fa-search"></i></a></li>
						    </ul>
						    
						  </div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}

export default header;