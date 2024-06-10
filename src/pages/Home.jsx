import React from 'react'
import Navbar from '../components/Navbar';
import Status from '../components/Status';
import Posts from '../components/Posts';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Status />
      <Posts />
      <Footer />
     
    </div>
  )
}

export default Home
