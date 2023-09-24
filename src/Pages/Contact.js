import React from 'react'
import Layout from '../components/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledRoundedIcon from '@mui/icons-material/PhoneEnabledRounded';


const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        my:10,
        mx:7,
        "& h4": {
          fontWeight:'bold', mb:2
        }
      }}>
        <Typography variant='h4'>
          Contact My Restaurant
        </Typography>
        <p>
        We value your feedback and look forward to serving you. If you have any questions, comments, or special requests, please don't hesitate to get in touch with us. Your satisfaction is our ultimate goal.
        </p><br/>
        <p>
        Thank you for choosing <span style={{fontWeight:'bold'}}>My Chinese Restaurant</span>, where every dish is a reflection of our passion for Chinese cuisine. 
        </p>
      </Box>
      <Box>
        <TableContainer component={Paper}>
        <Table aria-label='contact-table'>
          <TableHead>
            <TableRow>
              <TableCell sx={{bgcolor:'black', color:'white'}}align='center'>
                Contact Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <SupportAgentIcon sx={{ pt:2, fontSize:'40px'}}/> 1800-00-0000 (tollfree)
              </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <MailOutlineIcon sx={{ pt:2, fontSize:'40px'}}/> reachout@myhelp
              </TableCell>
              </TableRow>
              <TableRow>
              <TableCell >
                <PhoneEnabledRoundedIcon sx={{ pt:2, fontSize:'40px'}}/> 1230984755
              </TableCell>
              </TableRow>
              
            
          </TableBody>
        </Table>

        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact