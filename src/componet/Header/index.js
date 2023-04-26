import React from "react";

import './index.css'
import logo1 from '../../images/hotale.png'



function Header() {
  return (
	
		
	<div className="header-section">
		<div className="hotale">
      <img className='hotale' src={logo1} alt="dots" />
    </div>

	   <div className="header">
       <div className="links">
          <a href="#" className="text">Home page  </a>
          <div className="pointer"> </div> 
       </div>
       <div className="dropdown">
          <button className="dropbtn">About Us
          {/* <div className="pointer"> </div> */}
          </button>  
             <div className="dropdown-content-1">
                    <a href="#">Client Review </a>
                   
             </div>
       </div>

       <div className="dropdown">
           <button className="dropbtn">Accommodation
           {/* <div className="pointer"> </div> */}
           </button>
              <div className="dropdown-content-2"> 
                 <a href="#">Deluxe room </a>
                 <a href="#">Superior Cottage </a>
                 <a href="#">Premium Room </a>
                 <a href="#">Garden view </a>

              </div>
                 
       </div>
       <div className="links">
          <a href="#" className="text">Gallery  </a>
          {/* <div className="pointer"> </div> */}
       </div>
       <div className="links">
          <a href="#" className="text">Amenities  </a>
          {/* <div className="pointer"> </div> */}
       </div>
       <div className="links">
          <a href="#" className="text">Contact Us  </a>
          {/* <div className="pointer"> </div> */}
       </div>          
     </div>

       <div className="sign"> 
            <a href="#" className="Sing">Sign in</a>
      </div>
      <div className="button">
         
             <button className="button-1">
             <a href="#" className="button-2">Book Now  </a>
             </button>
           
      </div>
     
    		
	</div>
	

	

  );
}

export default Header;