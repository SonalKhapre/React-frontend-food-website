import React from 'react';
import { Box } from '@mui/material';
import {useCart} from 'react-use-cart';

const Order = (props) => {
   
  const {addItem} = useCart();

    return (
    <>
    
     <Box sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
      
        
        <button style={{backgroundColor:'#e8b34f', padding:10, paddingInline: 20, margin:5, border:'none', borderRadius: 5}} onClick={() => {
          addItem(props.item)
          }}> Add </button>
      
        </Box>

        
        </>
  )
}

export default Order;