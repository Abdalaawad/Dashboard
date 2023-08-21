
import React from 'react'
import "./Chart.css"
import {  XAxis, CartesianGrid, Tooltip, AreaChart, Area,ResponsiveContainer} from 'recharts';
 
const data = [
  {
    name: "January",
    total: 4000,
  
     buy: 2400,
    
  },
  {
    name: 'February',
    total: 3000,
    
    // amt: 2210,
    
  },
  {
    name: 'March',
    total: 2000,


  },
  {
    name: 'April',
    total: 2780,

    
  },
  {
    name: 'May',
    total: 1890,
    
  },
  {
    name: 'june',
    total: 2390,
  
  
  },
 
];



const Chart = () => {
  return (
    <div className='app-chart'>
      {/* <div className='app-chart-title'>Last 6 Mounth Revenu</div> */}
      <ResponsiveContainer>
<AreaChart width="100%"  data={data} aspect={ 2/1}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient> */}
  </defs>
  <XAxis dataKey="name" />

  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  {/* <Area type="monotone" dataKey="buy" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
</AreaChart>
</ResponsiveContainer>
    </div>
  )
}

export default Chart