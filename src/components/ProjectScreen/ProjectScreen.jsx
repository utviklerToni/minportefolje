import React, { Fragment } from 'react';

// import PSComponent from './PSComponent';
// import homepagePic1 from '../../assets/images/homepage-fullhd.webp';
import newGaialivsstil from '../../assets/images/new-Gaialivsstil/laptop-home.png';

// import Gaialivsstil from '../ProjectLists/Gaialivsstil/Gaialivsstil';
import GaialivsstilV2 from '../ProjectLists/Gaialivsstil-V2/GaialivsstilV2';
// import mobileGaialivsstil from '../../assets/images/mobileGaialivsstil.webp';

const ProjectScreen = () => {
   return (
      <Fragment>
         {/* <Gaialivsstil projectImage={homepagePic1} /> */}
         <GaialivsstilV2 projectImage={newGaialivsstil} />
      </Fragment>
   );
};

export default ProjectScreen;
