// import React from 'react';

// import Layout from '../Layout';

// import HeroSection from '../sections/HeroSection';

// import PartnerSection from '../sections/PartnerSection';

// import TradingToolsSection from '../sections/TradingToolsSection';
// import SecuritySection from '../sections/SecuritySection';
// import StepSection from '../sections/StepSection.jsx';

// import BackToTopSection from '../sections/BackToTopSection';

// export default function index() {
//   return (
//     <Layout>
//       <HeroSection />
      
      
//       <PartnerSection />
    
//       <TradingToolsSection />
//       <SecuritySection />
//       <StepSection />
      
//       <BackToTopSection />
//     </Layout>
//   );
// }
import './Home.css';
import React from 'react';
import image1 from '../../assets/Sponsor-amico (1).png';
import image2 from '../../assets/Webinar-pana.png';
import image3 from '../../assets/Worried-amico.png';
import image4 from '../../assets/right-arrow (1).png';
import { Link } from 'react-router-dom';
function home() {
    return (
        <>
        
     <div className='main-container'>
     <h1 id="logo">INCVEST</h1>
     
      <div className='box'>
        
       <img  src={image1}  alt="Image 1" className="image1" /> 
      
        <h1 id='quote'>GIVE YOUR SAVING A WING</h1>
        <h4 id='quote2'>WE FIRST LISTEN THEN GIVE ADVICE</h4>
      </div>

      <div className='box'>
      <div class="blue-div"><img src={image2} alt="Image 2" className="image2" /> <Link to="/advisor"><button className='advisor'>FOR ADVISOR <img src={image4} alt="Image 4" className="image4" /> </button></Link></div>
      
    <div class="blue-div"><img src={image3} alt="Image 3" className="image3" />  <Link to="/investor"><button className='investor'>FOR INVESTOR <img src={image4} alt="Image 4" className="image4" /> </button></Link></div>
      </div>
</div>
       

        
        </>
    )
}

export default home