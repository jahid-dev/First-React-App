import React from 'react';
import Breadgram from '../../components/common/breadgram';
import Welcome from '../../components/about/welcome';
import Team from '../../components/about/team';
import Mission from '../../components/about/mission';
function about (){

	return(
		<div>
			<Breadgram/>
			<Welcome/>
			<Team/>
			<Mission/>
		</div>
	);

}

export default about;