import { Container, Grid, GridItem, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import about from '../assets/about2.jpg'
import { FaDollarSign } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";

const About = () => {
  return (
    <>
      <Container maxW={'1500px'} mt={12} mb={10} fontFamily={'monospace'}>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={6}>
          <GridItem w='100%'  >
            <Image src={"https://logopond.com/logos/e622d524aa6550f98f62e39d5ec23da5.png"} w={'100%'} borderRadius={'20px'} />
          </GridItem>
          <GridItem w='100%' fontSize={['1.25rem']} ml={3}>
            <Heading mt={3}>
              Our Story
            </Heading>
            <Text mt={8}>
              Launced in 2015, Urban Marketplace is Asia’s premier online shopping makterplace with an active presense in India. Supported by wide range of tailored marketing, data and service solutions, Urban Marketplace has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
            </Text>

            <Text>Urban Marketplace has more than 1 Million products to offer, growing at a very fast. Urban Marketplace offers a diverse assotment in categories ranging  from consumer.</Text>
          </GridItem>
        </Grid>

        <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']} mt={24}  gap={6}>
          <GridItem w='100%'  >
            <VStack p={5} fontSize={['1.25rem','1.35rem','1.5rem']} border={'1px solid black' } h={['200','250','280']}>
              
              <VStack fontSize={'2rem'}>
              <FaDollarSign/>
              </VStack>
              

               <Text mt={3}>
                33k
               </Text>
               <Text>
                Monthly Product Sale
               </Text>
            </VStack>
          </GridItem>
          <GridItem w='100%' >
            <VStack p={5} fontSize={['1.25rem','1.35rem','1.5rem']} border={'1px solid black' } h={['200','250','280']}>
            <VStack fontSize={'2rem'}>
            <FaHome/>
            </VStack>
           
            <Text>
              10.5k
            </Text>
            <Text>
            Sallers active our site
            </Text>
            </VStack>
          </GridItem>
          <GridItem w='100%' >
            <VStack p={5} fontSize={['1.25rem','1.35rem','1.5rem']} border={'1px solid black' } h={['200','250','280']}>
              <VStack fontSize={'2rem'}>
              <FaGift/>
              </VStack>
              <Text>45.5k</Text>
              <Text>Customer active in our site</Text>
            </VStack>
          </GridItem>
          <GridItem w='100%' >
            <VStack p={5} fontSize={['1.25rem','1.35rem','1.5rem']} border={'1px solid black' } h={['200','250','280']}>
              <VStack fontSize={'2rem'}>
              <TbMoneybag/>
              </VStack>
              <Text>25k</Text>
              <Text>Annual gross sale in our site</Text>
            </VStack>
          </GridItem>
        </Grid>


      </Container>
    </>
  )
}

export default About