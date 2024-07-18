import { Container, HStack, Image, Stack, VStack, Text, Button, useMediaQuery, Grid, GridItem, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaTruckMoving } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { TbDiscountCheckFilled } from "react-icons/tb";

import { remove, addToCart } from '../App/cartSlice'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const Productdetails = () => {
  const [islarger] = useMediaQuery("(max-width: 995px)")
  const { id } = useParams();
  
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchdetails = async () => {
      const data = await fetch(`https://dummyjson.com/products/${id}`);
      const jsons = await data.json();
      setproducts(jsons)
    }
    fetchdetails()
  }, [id])

  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.cart);
  const isempty = items.length === 0;

  return (
    <>
      <Container maxW={['container.sm', 'container.lg', 'container']} h={['1200', '1200', '900']} mb={20}>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} mt={12} gap={6}>
          <GridItem w='100%' h='370'>
            <HStack>
              <Image src={products?.images?.[0]} h={['190', '300', '400']} w={['190', '300', '400']} />
            </HStack>
            <Grid templateColumns={`repeat(${products.images ? products.images.length : 1}, 1fr)`} gap={0} mt={8}>
              {products.images?.map((image, index) => (
                <GridItem key={index} w={20} h='10'>
                  <Image src={image} h={70} w={70} />
                </GridItem>
              ))}
            </Grid>
          </GridItem>
          <GridItem w='100%' h='400' mt={['2', '10', '12']}>
            <Stack>
              <Text fontFamily={'monospace'} fontSize={'2rem'}>{products.title}</Text>
              <Text fontFamily={'monospace'} fontSize={'1.5rem'} mt={0}>${products.price}.00
                <Text fontSize={'1rem'} color={'#00FF66'}>In Stock-{products.stock}</Text>
                <Text fontSize={'1rem'}>{products.description}</Text>
                <Text fontSize={'1rem'}>Brand-{products.brand}</Text>
              </Text>
              <HStack>
                <Button onClick={() => dispatch(addToCart(products))} bg={'#DB4444'} color={'white'} w={'50%'} fontFamily={'monospace'}>Buy Now</Button>
                <Button onClick={() => dispatch(remove(products))} bg={'#DB4444'} color={'white'} w={'50%'} fontFamily={'monospace'}>Remove</Button>
              </HStack>
              <Link to={'/cart'}>
                <Button isDisabled={isempty} onClick={() => dispatch(addToCart(products))} bg={'#DB4444'} color={'white'} w={'full'} fontFamily={'monospace'}>Proceed To Checkout</Button>
              </Link>
            </Stack>
          </GridItem>
        </Grid>
        <Grid templateColumns='repeat(1, 1fr)' gap={6}>
          <GridItem w='100%' h='10' mt={16}>
            <Box>
              <HStack>
                <Box mt={0}>
                  <FaTruckMoving color={'#DB4444'} fontSize={'2rem'} />
                </Box>
                <Text mt={10} ml={5} fontSize={'1rem'}>Free Delivery <br /> Enter your postal code for Delivery Availability</Text>
              </HStack>
            </Box>
            <Box>
              <HStack>
                <Box mt={0}>
                  <TfiReload fontSize={'2rem'} />
                </Box>
                <Text mt={10} ml={5} fontSize={'1rem'}>Free Delivery <br /> Enter your postal code for Delivery Availability</Text>
              </HStack>
            </Box>
            <Box>
              <HStack>
                <Box mt={0}>
                  <TbDiscountCheckFilled color='#DB4444' fontSize={'2rem'} />
                </Box>
                <Text mt={10} ml={5} fontSize={'1rem'}>Discount <br /> use brandy50 to get a 50% Discount on your first transaction</Text>
              </HStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export default Productdetails
