import React from 'react'
import Layout from '../components/Layout'
import { useCart } from 'react-use-cart'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import '../styles/Cart.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

 export default function Cart () {
    
    
     const buyNow = () => {
         isEmpty? alert("Please add item from menu."): alert("Order Placed! Please collect your order from My Chinese Restaurant. Thankyou!")
    }
   
    const { 
      isEmpty,
      items,
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart
      
     } = useCart();

    return (
    <Layout>
    {(isEmpty) &&  <h1>Your cart is empty!</h1>}
    
    
   {/* {console.warn(items)} */}
    <section>
      <TableContainer component={Paper} className='tableContainer' style={{minHeight:'90vh'}}>
       
        <Table>
          <TableBody>
          {items.map((item,index) => {
            return(
              
            <TableRow  key={index}>
            <div className='row'>
              <td className='image'>
                <img src={item.image} alt='item' style={{height: '6rem', width: '6rem'}}/>
              </td>
              <td className='td1' style={{fontSize:'larger', width: '15rem', textAlign:'center'}}>{item.name}</td>
              <td className='td2' style={{width: '15rem', textAlign:'center'}}><CurrencyRupeeIcon sx={{fontSize:'small'}}/>{item.price}</td>
              <td className='td3' style={{width: '15rem', textAlign:'center'}}>Quantity ({item.quantity})</td>
              <td className='td4'>
               <div className='buttonPM' style={{display:'flex'}}>
                <button  style={{background:'wheat', height:'1.2rem', width:'1.2rem', border:'none', borderRadius:"50%"}}  onClick={()=>{ updateItemQuantity(item.id, item.quantity-1)}}>-</button>
                <button  style={{background:'wheat', height:'1.2rem', width:'1.2rem', border:'none', borderRadius:"50%"}}  onClick={()=>{ updateItemQuantity(item.id, item.quantity+1)}}>+</button>
                </div>
                <div className='removeBtn'>
                <button className='remove' style={{border:'none', padding:3, background:'#C70039', color:'whitesmoke', borderRadius:3, marginTop:'.5rem'}} onClick={()=>{ removeItem(item.id)}}>Remove Item</button>
                </div>
                </td>
              </div>
            </TableRow>
            
            )})}
          </TableBody>
        </Table>
        </TableContainer>


        <div className='Price'>
          <h2 style={{fontWeight:'bold', marginTop:'1rem'}}>Total Price : <CurrencyRupeeIcon sx={{fontSize:'large'}} className='rupee'/>{cartTotal}</h2>
        
        
         <button className='buy' style={{margin:".5rem", height:'3rem', width:'5rem', backgroundColor:'green', color:'white', border:'none', borderRadius:'4rem'}} onClick={buyNow}>Buy Now</button> 
         <button className='buy' onClick={()=>{emptyCart()}} style={{margin:'.5rem', height:'3rem', width:'5rem',backgroundColor:'wheat', color:'black',border:'none', borderRadius:'4rem'}}>Clear Cart</button>
          
          
        </div>
     
      
    </section> 


    </Layout>
    );}
  