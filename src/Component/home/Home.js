import React from 'react'
import Charts from '../charts/Charts'
import FeaturedInfo from '../featuredinfo/FeaturedInfo'
import { userData } from '../dummydata.js'
import './home.css'
import WidgetSm from '../widgetSm/WidgetSm'
import WidgetLg from '../widgetLg/WidgetLg'



function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Charts data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className='widget'>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home