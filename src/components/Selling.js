import React from 'react'
import {  HStack, Text, Image, Button, SimpleGrid } from '@chakra-ui/react'
// import big from '../assets/big2.png'
import { useDispatch } from 'react-redux'
import {addToCart} from '../App/cartSlice'
import { Link } from 'react-router-dom'

const bestprod = [
    {
        "id": 1,
        "title": "Essence ",
        "price": 549,
        "images": "https://m.media-amazon.com/images/I/61HLmRuVZvL.jpg"
    },
    {
        "id": 16,
        "title": "Apple",
        "price": 19,
        "images": "https://as1.ftcdn.net/v2/jpg/00/48/47/02/1000_F_48470256_AR1sNtOQlP2lOju8ONJLcgT4H4w1cEEd.jpg",
    },
    {
        "id": 27,
        "title": "Honey Jar",
        "price": 51,
        "images": "https://img.freepik.com/premium-vector/honey-jar-watercolor-clipart-white-background_191095-6048.jpg?w=826",
    },
    {
        "id": 30,
        "title": "Kiwi",
        "price": 30,
        "images": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Kiwifruit_cross_section.jpg/220px-Kiwifruit_cross_section.jpg",
    }
]




const Selling = () => {
    
    return (
        <>
            <HStack mt={10}>
                <div style={{ height: '50px', width: '15px', background: '#DB4444', marginTop:'2px' }}></div>
                <HStack w={'full'} justifyContent={'space-between'}  >
                    <Text fontSize={['1.25rem', '1.55rem', "1.85rem"]}  mt={6} fontFamily={'monospace'} >Best Selling Products</Text>
                  <Link to={'/allproducts'}>
                  <Button px={5} fontSize={['0.88rem','1.25rem']}>View All</Button>
                  </Link> 
                </HStack>
            </HStack>

            <SimpleGrid columns={[2, 2, 4]} gap={10} >

                {
                    bestprod.map((item) => (
                        <Card bestprod={item} key={item.id} />
                    ))
                }

            </SimpleGrid>

            <HStack mt={20} px={5} >
                <Image src={"https://www.bigbasket.com/media/uploads/banner_images/B2C061811354-21875-DT-460-all-cm-220624.jpg?tr=w-1080,q=80"} w={'full'} h={['120','260','300']} />
            </HStack>

        </>
    )
}

export default Selling

const Card = ({ bestprod}) => {

    const dispatch = useDispatch();
        
    return (
        <>
            <SimpleGrid columns={[1, 1, 1]} mt={10} >
                <Link to={`/productdetails/${bestprod.id}`}>
                
                <Image src={bestprod?.images} h={['150','250']} />
                <Text mt={2} h={45}>{bestprod.title}</Text>
                <Text>${bestprod.price}</Text>
                </Link>
                <Button mt={5} bg={'#DB4444'} color={'white'} w={['200','300']} onClick={() => dispatch(addToCart(bestprod))} >Add to Cart</Button> 
            </SimpleGrid>

        </>
    )
}