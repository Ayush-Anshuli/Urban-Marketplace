import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AutoPlay from '../components/Autoplay.js'
import { HStack, Container, Wrap } from '@chakra-ui/react'
import Browse from '../components/Browse.js';
import Selling from '../components/Selling.js';
import Products from '../components/Products.js';
import Cart from './Cart.js';

const Home = () => {
    return (

        <>
        <Container maxW={['container.sm','container.lg','container.xl']} h={['250', '400', '550']} mb={5} mt={2} py={5} px={['10']}>
            <AutoPlay />
        </Container>
  
        <Container maxW={['container.sm','container.lg','1500px']} h={['250','290','310']} px={12} borderBottom={'1px solid gray'}>
            <Browse/>
        </Container>

        <Container maxW={'1500px'}  px={12}>
            <Selling/>
        </Container>

        <Container maxW={'1500px'} mt={12} py={5}>
            <Products/>
        </Container>


        
        </>


    )
}

export default Home