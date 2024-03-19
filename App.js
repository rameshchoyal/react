import React from "react";
import ReactDOM  from "react-dom/client";

/*
* Header
    -logo
    -nav items
* Body
    -search bar
    -restaurant container
        -restaurant cart
* Footer
    -copyright
    -Links
    -Address
    -Contact
*/

const Header=() => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo-new/hotdog-on-top-of-a-food-truck-8847ld.png?nwm=1&nws=1&industry=restaurant-food"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard =(props) =>{
   
    return (
        <div className="res-card">
            <img
            className="res-log"
            alt="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bfc67762fa34dd47250975f3e8131344"
            />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.6 Stars</h4>
            <h4>20-25 mins</h4>
        </div>
    )
}
const Body =() => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
               <RestaurantCard resName="California Burrito" cuisine="Biryani, North Indian, Asian"/>
               <RestaurantCard resName="KFC" cuisine="Burger, Wings, French Fry"/>
            </div>
        </div>
    )

}
const AppLayout= () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

