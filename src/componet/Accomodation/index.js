import React from "react";
import Slider from "react-slick";
import './index.css'
import Juniorsuite from "./images/Juniorsuite.jpg"
import star from "./images/star.png"

// import Standarddeluxe from "./images/Standarddeluxe.jpg"
// import Penthous from "./images/Penthous.jpg"
// import Grandsuite from "./images/Grandsuiteroom.jpg"


let rooms = 
      [
        {
            image : "./images/Standarddeluxe.png",
            title : "Luxury Suite",
            room_icon :"./images/Roomsymbol.png",
            room_title :  "1 King Bed",
            guest_icon : "./images/people.png",
            guest_title :  "4 Guests",
            price : "$90 / night",
            book_now :"BOOK Now"
        },
        {
            image :  "./images/Juniorsuite1.jpg",
            title : "Standard Deluxe",
            room_icon :"./images/Roomsymbol.png",
            room_title :  "2 Single Beds",
            guest_icon : "./images/people.png",
            guest_title :  "6 Guests",
            price : "$75 / night",
            book_now :"BOOK Now"
        },
        {
            image : "./images/Grandsuiteroom.png",
            title : "The Penthouse",
            room_icon :"./images/Roomsymbol.png",
            room_title :  "2 King Beds",
            guest_icon : "./images/people.png",
            guest_title :  "6 Guests",
            price : "$250 / night",
            book_now :"BOOK Now"
        },
        {
            image : "./images/LuxurySuite.jpg",
            title : "Grand Suite Room",
            room_icon :"./images/Roomsymbol.png",
            room_title :  "1 King Bed",
            guest_icon : "./images/people.png",
            guest_title :  "4 Guests",
            price : "$80 /Night",
            book_now :"BOOK Now"
        },
        {
            image : "./images/LuxurySuite.jpg",
            title : "Junior Suite Room",
            room_icon :"./images/Roomsymbol.png",
            room_title :  "1 Double Bed",
            guest_icon : "./images/people.png",
            guest_title :  "3 Guests",
            price : "$80$69 / night",
            book_now :"BOOK Now"
        },
        {
            image : "./images/LuxurySuite.jpg",
            title : "Standard Room",
            room_icon :"./images/Roomsymbol.png",
            room_title :  "1 Double Bed",
            guest_icon : "./images/people.png",
            guest_title :  "4 Guests",
            price : "$80 /Night",
            book_now :"BOOK Now"
        },

       ]

function Accomodation () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };

    return (
          <>
                     <Slider {...settings}>
                        {rooms.map((data,i)=>(
        
               <div className="LuxurySuite-image" key={i}>
                {/* {data.image} */}
               <img className="LuxurySuite-1" src={data.image} alt=""/>
               <div className="LuxurySuite-tital">
               {data.title}
              </div>
              <div className="LuxurySuite-subtital">
                <img className="Roomsymbol" src={data.room_icon} alt="image"/>
                <div className="LuxurySuite-subtital-1">
                    {data.room_title}
                </div>
                <img className="People" src={data.guest_icon} alt="image"/>
                <div className="LuxurySuite-subtital-2">
                     {data.guest_title}
                </div>
                <div className="LuxurySuite-subtital-3"></div>
                <div className="curency">
                    {data.price}
                 </div>
                 <div className="LuxurySuite-botton">
                      <button className="LuxurySuite-botton-1">
                      <a href="#" className="LuxurySuite-botton-2">{data.book_now} </a>
                         </button>
 
                 </div>
                            
             </div>
             
          </div>
          
           ) )}
           
    
    </Slider>
                <div className="view-button">
                   
                     <button className="view-button-1">
                     <div>  
                        <img className="star" src={star} alt="image"/>
                     </div>
                       <a href="#" className="view-all-room">VIEW ALL ROOMS </a>
                    
                    </button>
             </div>
                
          </>  
    )
}

export default Accomodation;