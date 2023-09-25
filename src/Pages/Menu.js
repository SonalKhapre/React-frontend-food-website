import React from 'react'
import Layout from '../components/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import {MenuList} from "../Database/Data"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Order from './Order';
import { useCart } from 'react-use-cart'
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  
  const { 
    totalUniqueItems,
    totalItems,
   } = useCart();

   const navigate = useNavigate();
   const handleCart = () => {
    navigate('/cart');
   }
  

  return (
    <Layout>
       
       <div style={{display:'flex', marginTop:10}}>
          <h5>Cart ({totalUniqueItems}), Total Items ({ totalItems})</h5>
          <button style={{height:'20px', marginTop:20, marginLeft:8, border:'none', backgroundColor:'green', borderRadius: 3, padding:2, color:'white'}}  onClick={handleCart}>Go To Cart</button>
         </div>

        <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
        
        
       

        {
          MenuList.map((item) => (
          <Card key={item.id} sx={{maxWidth:'390px',display:'flex', m:2, marginTop:5, alignContent:'flex-start'} }>
              <CardActionArea>
               <CardMedia sx={{minHeight:'400px', maxHeight:'400px'}} component={'img'} src={item.image} alt={item.name}/>
               <CardContent>
                <Typography variant='h5' gutterBottom component={'div'}>
                  {item.name}
                </Typography>
                <Typography variant='body2'>
                  {item.description}
                </Typography>
                <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <Typography variant='body2' sx={{fontWeight:'bold', textAlign:'start', display:'flex', alignItems:'center', color:'grey'}}>
                  <CurrencyRupeeIcon sx={{fontSize:'small'}} /> {item.price} for one
                </Typography>
                 <Order item={item} />
                </Box>
               </CardContent>
              </CardActionArea>  
            </Card>
          ))
        }
        </Box>
    </Layout>
  )
}

export default Menu