import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
     <Box sx={{textAlign:'center', bgcolor:"#1A1A19", color:'white', p:3}}>
     <Box sx={{my: 3, "& svg" : {
        fontSize:"60px",
        cursor:'pointer',
        mr: 2
     },
     "&  svg:hover":{color:'goldenrod', transform: 'scale(1,1.3)', transition:'all 400ms'}
     }}>
        {/*icons*/}
        <a href='https://www.instagram.com/'>
        <InstagramIcon sx={{color:'white'}}  /></a>
        <a href='https://twitter.com/home'>
        <TwitterIcon sx={{color:'white'}} /></a>
        <a href='https://www.youtube.com/@sujatakhapre8058'>
        <YouTubeIcon sx={{color:'white'}} /></a>
        <a href='https://github.com/SonalKhapre?tab=repositories'>
        <GitHubIcon sx={{color:'white'}} />
        </a>
     </Box>
        <Typography variant='h5' sx={{"@media (max-width:600px)":{fontSize: "1rem"}}}>
            All Rights Reserved &copy; My Chinese Restaurant
        </Typography>
     </Box>
    </>
  )
}

export default Footer;