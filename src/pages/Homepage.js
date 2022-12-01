import React from 'react'
import CarouselFadeExample from '../component/Carousel/CarouselFadeExample'
import NavigationBar from '../component/Navigationbar/NavigationBar'
import Section from '../component/Section/Section'

function Homepage() {
  return (
    <div>
        <NavigationBar />
        <CarouselFadeExample />
        <Section />
    </div>
  )
}

export default Homepage