import { Container, Grid, GridItem, HStack, Heading, Text, Stack, VStack, Center, Box, Image } from '@chakra-ui/react'
import React from 'react'
import QR from '../assets/QR.png'
import play from '../assets/PLAY.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";





const Footer = () => {
  return (


    <Container maxW={'2000px'} bg={'black'} mt={12}>
      <Grid templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={2}>
        <GridItem w='100%' h='200' mt={10} >
          <VStack fontSize={'0.95rem'} fontFamily={'monospace'} color={'gray.400'}>
            <Text fontSize={['0.75rem','0.95rem','1rem']} color={'gray.200'}>Urban Marketplace</Text>
            <Text fontSize={['0.75rem','0.95rem','1rem']}>Subscribe</Text>
            <Text fontSize={['0.75rem','0.95rem','1rem']}>Get 50% off on your first order</Text>
            <input formAction='' placeholder='Enter Your email' style={{ background: 'transparent', border: '1px solid #DB4444', padding: '4px' }} />
          </VStack>
        </GridItem>
        <GridItem w='100%' h='200' mt={10}>
          <VStack fontSize={'0.95rem'} fontFamily={'monospace'} color={'gray.400'}>
            <Text fontSize={['0.75rem','0.95rem','1rem']} color={'gray.200'}>Support</Text>
            <Text fontSize={['0.75rem','0.95rem','1rem']}>Garia Panchpota ,Mirzapur,Kolkata West Bengal</Text>
            <Text fontSize={['0.75rem','0.95rem','1rem']}>821 XXX XX82</Text>
          </VStack>
        </GridItem>
        <GridItem w='100%' h='200' mt={10}>
          <VStack fontSize={'0.95rem'} fontFamily={'monospace'} color={'gray.400'}  >
            <Text fontSize={['0.75rem','0.95rem','1rem']} color={'gray.200'}>Quick Links</Text>
            <Text fontSize={['0.75rem','0.95rem','1rem']}>Cart</Text>
            <Text fontSize={['0.75rem','0.95rem','1rem']}>Payment</Text>
            <Text fontSize={['0.75rem','0.95rem','1rem']}>Collections</Text>
          </VStack>
        </GridItem>
        <GridItem w='100%' h='200' mt={10}>
          <VStack fontSize={'0.95rem'} fontFamily={'monospace'} color={'gray.400'}>
            <Text fontSize={['0.75rem','0.95rem','1rem']} color={'gray.200'}>DownLoad</Text>
            <Image src={QR} h={20} />
            <Image src={play} h={['12', '16', '20']} />
            <HStack p={3} fontSize={'1.2rem'}>
              <a href='https://github.com/Ayush-Anshuli'><FaGithub /></a>
              <a href='https://www.linkedin.com/in/ayush-anshuli-1a4b71246/'><FaLinkedin /></a>
              <a href='https://www.instagram.com/__ay_u_sh_8/'><FaInstagram /></a>
            </HStack>
          </VStack>
        </GridItem>


      </Grid>
      <hr style={{ border: '1px solid red', marginTop: '100px' }} />
      <Center color={'gray.600'} >
        <HStack fontSize={['0.75rem','0.95rem','1rem']}>
          <HStack>
            <FaRegCopyright />
          </HStack>
          <HStack mt={3}>
            <Text  fontFamily={'monospace'}>Copyright Urban Marketplace 2024.All right reserved</Text>
          </HStack>
        </HStack>



      </Center>
    </Container>
  )
}

export default Footer