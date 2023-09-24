import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'


const About = () => {
  return (
    <Layout>
       <Box sx={{
        my:15, 
        textAlign:"center",
        minHeight:'80vh',
        "& h4":{
           fontWeight:'bold',
           my:2,
           fontSize:'2rem'
        },
        "& p":{
          textAlign:'justify',
          mx:5
        },
        "@media (max-width : 600px)":{
          mt:0,
          p:2,
          "& h4":{
            fontSize:'1.5rem'
          }
        }
       }}>
        <Typography variant='h4'>
          Welcome To My Restaurant
        </Typography>
        <p>
        We take pride in bringing the rich and diverse flavors of China to your doorstep. Our passion for exceptional food, commitment to quality, and dedication to customer satisfaction drive everything we do.
        </p>
        <br/>
        <h5 style={{textAlign:"center", textDecorationLine:'underline'}}>Our Story</h5> <br/>
        <p>
       My Chinese Restaurant was founded with a simple yet profound goal: to share the true essence of Chinese cuisine with food enthusiasts like you. Our journey began in 1998 with a small family-owned restaurant, where traditional recipes and fresh ingredients formed the heart of our offerings.
       </p>
       <br/>
       <p>
       Over the years, we've evolved and expanded, but our core values remain the same. Today, we continue to uphold the time-honored traditions of Chinese cooking, combining them with modern culinary techniques to create a menu that's both timeless and innovative.
        </p>
        <br/>
        <h5 style={{textAlign:"center", textDecorationLine:'underline'}}>Our Commitment</h5><br/>
        <p>
        Quality is our top priority. We carefully source the finest ingredients, handpick the freshest produce, and ensure that each dish is prepared with precision and care. Our team of skilled chefs is dedicated to delivering flavors that resonate with authenticity and perfection.
        </p>
       </Box>
    </Layout>
  )
}

export default About