import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Homepage from '../components/HomePage/HomePage';
import Footer from '../components/Footer/Footer';
import Services from '../components/ServiceCard/servicesDisplay';



export const Home = () => {
    return (
        <div>
            <Navbar />
            <Homepage />
            <Footer />

        </div>
    )
}

export default Home;
