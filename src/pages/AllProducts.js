import { Container, HStack, Text,SimpleGrid,Button,Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../App/cartSlice'
import { Link } from 'react-router-dom'

const Products = () => {

  const items = useSelector((state) => state.cart.items)
  // console.log(items)

  return (
    <>

      <Container maxW={['container.sm', 'container.lg', '1600px']}>
        <HStack>
          <div style={{ background: 'red.500', height: '50px', width: '15px', marginTop: '15px' }}></div>
          <Text fontSize={'2rem'} mt={10} fontFamily={'monospace'}>Collections</Text>
        </HStack>



        <SimpleGrid columns={[2, 2, 5]} gap={10} border={'1px s'}>

          {
            items.map((item) => (
              <AllCard items={item} key={item.id}/>
            ))
          }

        </SimpleGrid>

      </Container>

    </>
  )
}

const AllCard = ({ items }) => {
  const dispatch = useDispatch();

  

  return (


    
    <>
      <SimpleGrid columns={[1, 1, 1]} mt={10} >
        <Link to={`/productdetails/${items.id}`}>
        
        <Image src={items?.images[0]} h={['150', '180']} />
        <Text mt={2} h={45}>{items?.title}</Text>
        <Text mt={0}>${items?.price}</Text>

        </Link>
        <Button mt={5} bg={'#DB4444'} color={'white'} w={['200','300']} onClick={() => dispatch(addToCart(items))} >Add to Cart</Button>

       
      </SimpleGrid>

    </>
  )
}


export default Products