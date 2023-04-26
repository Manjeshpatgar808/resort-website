import React from "react";
import './index.css';
import bagruond from "./bagruond.jpg"
import Sirvices from "./Sirvices.jpg"
function Service () {
    return(
        <>
           <div className="bagruond-image1">
                    <img className="bagruond" src={bagruond} alt="image"/> 
               <div className="sirvice">
                  <div className="content-section">
                      <h3 className="content-tital">OFFERING A SERIES OF COMFORTABLE AND LAVISH HOTELS & RESIDENCES</h3>
                   
                        <div className="content-border"> </div>
                              <p className="content-subtital">All our hotels are fabulous, they are destinations unto themselves. We have crossed the globe to bring you only the best.</p>

                              <button className="learn-more">
                                <a href="#" className="learn-more-1">LEARN MORE</a>
                             </button> 

                        </div>
                   <div className="image-section">
                       <div className="sirvice-image">
                            <img className="Sirvices" src={Sirvices} alt="image"/> 
                       </div>
                   </div>
             </div>
          </div>



        
            {/* <div className="bagruond-image">
                <img className="bagruond" src={bagruond} alt="image"/>  
                  
                 <div className="content-section">
                      <h3 className="content-tital">OFFERING A SERIES OF COMFORTABLE AND LAVISH HOTELS & RESIDENCES</h3>
                   
                     <div className="content-border"> </div>
                     <p className="content-subtital">All our hotels are fabulous, they are destinations unto themselves. We have crossed the globe to bring you only the best.</p>

                     <button className="learn-more">
                         <a href="#" className="learn-more-1">LEARN MORE</a>
                     </button> 
                 </div>

            
                  <div className="image-section">
                     <div className="sirvice-image">
                          <img className="Sirvices" src={Sirvices} alt="image"/> 
                     </div>
                 </div> 
                 
           </div>           */}



        </>

       

    );
}
export default Service;