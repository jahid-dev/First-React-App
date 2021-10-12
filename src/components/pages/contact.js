import React from 'react';
import Breadgram from '../../components/common/contactbreadgam';
import Ctinfo from '../../components/contact/contactinfo';
import Ctmap from '../../components/contact/contactmap';
function contact (){

	return(
		<div>
			<Breadgram/>
			<Ctinfo/>
			<Ctmap/>
		</div>
	);

}

export default contact;