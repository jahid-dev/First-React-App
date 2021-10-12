
import React from 'react';
import Bannar from '../../components/homepage/bannar';
import Service from '../../components/homepage/services';
import Testimonial from '../../components/homepage/testimonial';
import Project from '../../components/homepage/project';
import Client from '../../components/homepage/client';
import Grouth from '../../components/homepage/grouth';


function home (){

	return(
		<div>
	    <Bannar />
	    <Service />
	    <Project />
	    <Grouth />
	    <Testimonial />
	    <Client />
	    </div>
	);

}

export default home;