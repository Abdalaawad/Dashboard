import React from 'react'
import "./Home.css"
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import Widget from '../../component/widget/Widget'
import Featuerd from '../feature/Featuerd'
import Chart from '../../component/charts/Chart'
import List from "../../component/list/List"

const Home = () => {
  return (
    <div className='app-home'>
        <Sidebar />
        <div className='home-content'>
            <Navbar />
            <div className='widget'>  
            <Widget type = "users"/>
            <Widget type="order" />
            <Widget type="earning"/>
            <Widget type="balance"/>
            </div>
            <div className='feature'>
              <Featuerd />
              <Chart />
              </div>
              <div className='table-list-container'>
                <List />
              </div>
        </div>

    </div>
  )
}

export default Home