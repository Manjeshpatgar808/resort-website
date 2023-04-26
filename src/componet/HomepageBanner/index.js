import React from "react";
import './index.css';
import room from "./images/room.jpg"
function HomepageBanner () {
    return(
        <div className="image-container">
            <img className="room" src={room} alt="image"/>
            <div className="content">
                <h3 className="content">
                  Hotel for the elite passionate about luxury & comfort
                </h3>
           </div>
           <div className="paragraph">
                 <p className="paragraph-1">Hotale has a series of lavish and comfortable hotels and residencesin Asia,
                                    <p>Europe, and America. <a href="#" className="paragrap-2">Check Availability.</a> </p> 
                 </p>
          </div>
           <div className="option">
               <div className="option-1">
                  <div className="check-in">
                      Check In  
                      <div className="box-1">APR 16, 2023</div>            
                 </div>
                 <div className="check-out">
                     Check Out
                     <div className="box-2">APR 17, 2023</div>  
                 </div>
              </div>
               <div className="option-2">
                  room
                  <div className="box-3">1</div>  
              </div>
               <div className="option-3">
                  Guests
                  <div className="box-4">ADULTS 2CHILDREN 0</div>  
               </div>
               <div className="search-room">
                  <button className="search">
                      <a href="#" className="search-room-1">search room </a>
                  </button>

               </div>
          
          </div>
          
           

        </div>

    );
}
export default HomepageBanner;
