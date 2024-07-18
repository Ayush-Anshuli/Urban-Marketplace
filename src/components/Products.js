import React from 'react'
import {  HStack, Text, Image, Button, SimpleGrid } from '@chakra-ui/react'
import big from '../assets/big2.png'
import { useDispatch } from 'react-redux'
import {addToCart} from '../App/cartSlice'
import { Link } from 'react-router-dom'

const bestprod = [
    {
      "id": 23,
      "title": "Eggs",

      "price": 14,
        "images":"https://kidseatincolor.com/wp-content/uploads/2022/02/eggs-e1648216350119-1024x681.jpeg",

    },
    {
      "id": 15,
      "title": "Wooden Bathroom Sink With Mirror",
      "price": 30,
        "images":"https://m.media-amazon.com/images/I/71l3mLhj4DL._AC_UF894,1000_QL80_.jpg",

    },
    {
        "id": 27,
        "title": "Honey Jar",
        "price": 51,
        "images": "https://img.freepik.com/premium-vector/honey-jar-watercolor-clipart-white-background_191095-6048.jpg?w=826",
    },
    {
      "id": 19,
      "title": "Chicken.",
      "price": 46,
        "images":"https://cccapi.cococa.in/public/uploads/product_images/product_image_1200x1200/test-1200x1200-Chicken-Curry-Peas.jpg",

    },
    {
      "id": 18,
      "title": "Cat Food",

      "price": 40,
      "images":"https://m.media-amazon.com/images/I/81fjRg88qYL.jpg",

  },
  {
    "id": 8,
    "title": "Dior J'adore",
    "price": 1499,
    "images":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqdvUgZ583gYUOdtmtH9Az7ijjnUPnWiKoy2Z8_qH1tEl8XOr6Xd4ULj1Y9ichV8IYa-OqlVw9MRFnXV3JDuponxjugVwzdLMc5DRMgnVNUVmj5T7bMIDI",

  },
  {
    "id": 9,
    "title": "Dolce Shine",
    "price": 1099,
    "images":"https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/resize-w:780/dolce-gabbana/7017479/0/wlfbMi-aU1-1_Product_3423473005353-Dolce-Gabanna-Dolce-Shine-Eau-De-Parfum-75ml_e52f229c24816b276ac210c7da3af357964202e5_1584345695.png",
  },
  {
    "id": 10,
    "title": "Gucci Bloom",
    "price": 1099,
      "images": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRk86a__1pVBCFJxb5hv3xY_ZrZGq6sZyMT65jG45FwSqDoMoeV5jzrO7JBvqq9HA529Y4ZwfJ6tIrKH_ubdOS5Bvt45hyzU-bhAOUzOXseCzd4G7wuBd0PgSBu",
  }
]




const Products = () => {
    
    return (
        <>
            <HStack mt={10}>
                <div style={{ height: '50px', width: '15px', background: '#DB4444', marginTop:'2px' }}></div>
                <HStack w={'full'} justifyContent={'space-between'}  >
                    <Text fontSize={['1.25rem', '1.55rem', "1.85rem"]}  mt={6} fontFamily={'monospace'} >Our Products</Text>
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


        </>
    )
}


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

export default Products
