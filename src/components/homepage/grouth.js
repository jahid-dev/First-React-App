import React, { Component } from 'react';
import CountUp, { startAnimation } from 'react-countup';
import '../../css/grouth.css'; 
function grouth(){
	return(
	<div className="grouth-section">
	
		<div className="container">
			<div className="row">
				<div className="offset-md-2 col-md-8">
					<div className="grouth-title text-center">
						<h2>Our Company Growth</h2>
						<p>We have grown strength over the past 20 years.</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-6 col-md-3 counter-text text-center">
					<i className="fa fa-heart-o" aria-hidden="true"></i>	          
	                 <div className="conter-online">
	                    <span className="tcounter">
	                    <CountUp className="CountUp" start={0} end={100} duration={3} ref={(countUp) => {
					      this.myCountUp = countUp;
					    }} />
	                    </span><span>+</span>
	                 </div>
	                 <h4>Staticfied Customers</h4>

	             </div>
				<div className="col-sm-6 col-md-3 counter-text text-center">
					<i className="fa fa-users" aria-hidden="true"></i>	          
	                 <div className="conter-online">
	                    <span className="tcounter">
	                    <CountUp className="CountUp" start={0} end={40} duration={3} ref={(countUp) => {
					      this.myCountUp = countUp;
					    }} />

	                    </span><span>+</span>
	                 </div>
	                 <h4>Team Members</h4>
	             </div>
				<div className="col-sm-6 col-md-3 counter-text text-center">
					<i className="fa fa-check-square-o" aria-hidden="true"></i>	          
	                 <div className="conter-online">
	                    <span className="tcounter">
	                    <CountUp className="CountUp" start={0} end={70} duration={3} ref={(countUp) => {
					      this.myCountUp = countUp;
					    }} />

	                    </span><span>+</span>
	                 </div>
	                 <h4>Complete Project</h4>
	             </div>
				<div className="col-sm-6 col-md-3 counter-text text-center">
					<i className="fa fa-trophy" aria-hidden="true"></i>	          
	                 <div className="conter-online">
	                    <span className="tcounter">
	                    <CountUp className="CountUp" start={0} end={15} duration={3} ref={(countUp) => {
					      this.myCountUp = countUp;
					    }} />

	                    </span><span>+</span>
	                 </div>
	                 <h4>Win Awards</h4>
	             </div>
			</div>
		</div>
	</div>
	);
}
export default grouth;