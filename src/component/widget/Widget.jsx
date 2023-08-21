import React from 'react'
import "./Widget.css"
import {AiOutlineArrowUp} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {AiOutlineDollarCircle} from 'react-icons/ai';
import {AiOutlineCreditCard} from 'react-icons/ai';
const Widget = ({type}) => {
    let amount = 100;
    let data;
switch (type) {
    case "users":
        data = {
            title:"USERS",
            ismoney: false,
            link: "See All Users",
            icon:  <CgProfile className='widget-icon-profile' style={{color:"crimson",
            backgroundColor: "rgb(255,0,0,0.2)"}} />

        };
        break;
        case "order":
        data = {
            title:"ORDER",
            ismoney: false,
            link: "View All Users",
            icon: <AiOutlineShoppingCart className='widget-icon-profile' style={{color:"gray",
        backgroundColor: "rgb(0,128,0,0.2)"}}/>
        };
        break;
        case "earning":
        data = {
            title:"Earning",
            ismoney: false,
            link: "See All Earning",
            icon: <AiOutlineDollarCircle className='widget-icon-profile' style={{color:"green",
            backgroundColor: "rgb(0,128,0,0.2)"}}/>
        

        };
        break;
        case "balance":
        data = {
            title:"Balance",
            ismoney: false,
            link: "See All Balance",
            icon:  <AiOutlineCreditCard className='widget-icon-profile' style={{color:"purble",
            backgroundColor: "rgb(128,0,128,0.2)"}} />
        
            
        };
        break;
        default:
            break;
    
    
}
  return (
 <div className='app-widget'>
    <div className='app-widget-left'>
        <span className='title-widget'>{data.title}</span>
        <span className='amount-widget'>{data.ismoney}{amount}</span>
        <span className='alluser-widget'>{data.link}</span>
      
    </div>
    <div className='app-widget-right'>
     <div className='app-widget-arrow negative'>
      <AiOutlineArrowUp />
      20%
      </div>
    {data.icon}
  
    </div>
 </div>
  )
}

export default Widget