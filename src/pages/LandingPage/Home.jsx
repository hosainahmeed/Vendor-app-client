import React from 'react'
import BannerSection from './Allsections/BannerSection'
import NewUpdate from './Allsections/NewUpdate'
import App from '../../App'
import CarouselComponent from '../../components/Carosel/CarouselComponent'

function Home() {
    return (
        <div>
            <BannerSection />
            <CarouselComponent />
            <NewUpdate />
        </div>
    )
}

export default Home