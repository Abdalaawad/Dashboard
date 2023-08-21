import React from 'react'
import "./Feature.css"
import {  AiOutlineMore} from 'react-icons/ai';
import {  AiOutlineArrowDown} from 'react-icons/ai';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Featuerd = () => {
  return (
<div className='app-feature'>
    <div className='app-feature-heading'>
        <h1>total revenue</h1>
        <AiOutlineMore fontSize="30"/>
       
    </div>
    <div className='app-feature-bottom'>
    <div className='app-feature-content'>
<CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>
    </div>
    <p className='feature-total'>
        total sales made today
    </p>
    <p className='feature-price'>
        $430
    </p>
    <p className='feature-payment'>preivious transaction proccing last payiming </p>

    
    <div className='app-feature-foot'>
    <div className='app-feature-container'>
    <div className='app-feature-foot-heading'>
        <p>Target
        </p>
    </div>
    <div className='app-feature-foot-price posative'>
        <AiOutlineArrowDown fontSize="small" />
        <h3 className='price '>$12.4k</h3>
        </div>
    </div>
    <div className='app-feature-container'>
    <div className='app-feature-foot-heading'>
        <p>Target
        </p>
    </div>
    <div className='app-feature-foot-price negative'>
        <AiOutlineArrowDown fontSize="small" />
        <h3 className='price'>$12.4k</h3>
        </div>
    </div>
    <div className='app-feature-container'>
    <div className='app-feature-foot-heading'>
        <p>Target
        </p>
    </div>
    <div className='app-feature-foot-price posative'>
        <AiOutlineArrowDown fontSize="small" />
        <h3 className='price'>$12.4k</h3>
        </div>
    </div>
    </div>
    </div>
</div>

  )
}

export default Featuerd