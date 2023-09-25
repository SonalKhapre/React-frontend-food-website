import React from 'react'
import Layout from '../components/Layout'
import banner from '../Images/banner.jpg'
import '../styles/HomeStyles.css'
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login'


const Home = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    console.log('Order button clicked');
    navigate('/menu');
  };
      

  return (
    <Layout>
        <div className='home' style={{backgroundImage:`url(${banner})`}}>
        <div className='headerContainer'>
        <h1>Food Website </h1>
        <p>Best Chinese In India</p>
        
           <button onClick={handleOrderClick}>
          ORDER NOW
        </button>
        </div>
        <Login/>
        </div>
    </Layout>
  )
}

export default Home