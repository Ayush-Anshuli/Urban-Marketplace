import { Button, Container, HStack, Image, Text, VStack, Stack, Input, Center } from '@chakra-ui/react'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom'
import { MdDelete } from "react-icons/md";



import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../App/cartSlice';


const Cart = () => {

    // const pro = [
    //     {
    //         "id": 1,
    //         "title": "iPhone 9",
    //         "price": 549,
    //         "images": "https://cdn.dummyjson.com/product-images/1/3.jpg"
    //     },
    //     {
    //         "id": 16,
    //         "title": "Hyaluronic Acid Serum",
    //         "price": 19,
    //         "images": "https://cdn.dummyjson.com/product-images/16/1.png",
    //     },
    //     {
    //         "id": 27,
    //         "title": "Flying Wooden Bird",
    //         "price": 51,
    //         "images": "https://cdn.dummyjson.com/product-images/27/1.jpg",
    //     },
    //     {
    //         "id": 30,
    //         "title": "Key Holder",
    //         "price": 30,
    //         "images": "https://cdn.dummyjson.com/product-images/30/3.jpg",
    //     }

    // ]

    // const [products,setallproducts] = useState([]);

    // useEffect(() => {
    //         const fetchproducts = async () => {
    //             const data = await fetch(`${ApiLink}`);
    //             const jsons = await data.json();
    //             setallproducts(jsons?.products);
    //             console.log(jsons)
    //         }

    //         fetchproducts()
    // },[])

    const cart = useSelector((state) => state.cart.cart)
    console.log(cart)

    const isEmpty = cart.length === 0;

    const {id} = useParams();
    


    return (
        <>
            <Container maxW={['container.sm', 'container.lg', 'container.xl']} mt={12}>


            {
                isEmpty ? (<HStack><Text fontSize={['1rem','1.25rem','1.5rem']} p={2} fontFamily={'monospace'}><Link to={'/allproducts'}>Your cart is currently empty. Start exploring our collection</Link></Text></HStack>) : 
                <Container maxW={['container.sm', 'container.lg', 'container.xl']}>
                <HStack justifyContent={'space-evenly'} py={2} alignItems={'center'} mt={8} fontSize={['0.85rem', '1.1rem', '1.5rem']} border={'1px solid gray'}>
                    <Text >Products</Text>
                    <Text>price</Text>
                    <Text>Quantity</Text>
                    <Text>SubTotal</Text>
                    <Text>Remove</Text>
                </HStack>
            </Container>
            }

              



                {
                    isEmpty ?
                    
                    (<Center h={'50vh'} mt={12}>
                        <lottie-player src="https://lottie.host/982d302b-fa21-406c-8a17-3f06e783125b/5hGqJk6zOU.json" background="#FFFFFF" speed="1" style={{width: '500px', height: '500px'}} loop  autoplay direction="1" mode="normal"></lottie-player>
                    </Center>) : (
                        <VStack>
                            {
                                cart.map((data) => (
                                    <CartCard cart={data} key={data.id}/>
                                ))
                            }
                        </VStack>
                    )
                }

                
            </Container>

            <Container maxW={['container.sm', 'container.lg', 'container.xl']} >


                <Stack mt={10} direction={['column', 'row', 'row']} justifyContent={'space-between'} mb={8}>
                    <HStack>
                        <Link to={`/allproducts`}>
                        <Button bg={'red.500'} py={3} w={['290px', '180px', '200px']} color={'white'} mt={['5', '10', '10']} ml={8} fontFamily={'monospace'}>
                            Return to Shop
                        </Button>
                        </Link>

                    </HStack>

                    <HStack>
                        <Link to={'/billing'}>
                            <Button isDisabled={isEmpty} bg={'red.500'} p={3} w={['290px', '180px', '200px']} color={'white'} mt={['5', '10', '10']} ml={8} fontFamily={'monospace'}> Proceed To Checkout</Button>
                            
                        </Link>
                    </HStack>
                </Stack>
            </Container>

        </>
    )
}

const CartCard = ({ cart }) => {
    // const {data} = pro
    let [Quantity, setquantity] = useState(1);
    const dispatch = useDispatch();


    const incerment = () => {
        setquantity(++Quantity);
    }

    const decrement = () => {
        if (Quantity > 1) {
            setquantity(--Quantity);
        }
    }

    return  (
        <>

            <Container maxW={'container.xl'} >
                <HStack justifyContent={'space-evenly'} py={2} alignItems={'center'} mt={8} fontSize={['0.85rem', '1.1rem', '1.5rem']} border={'1px solid lightgray'} style={{ boxShadow: '5px 5px 5px lightgray' }} >
                    <VStack >

                        <Image src={cart?.images[0]} h={['7', '30', '50']} ml={5} />

                    </VStack>


                    <VStack>
                        <Text ml={2}>${cart.price}</Text>
                    </VStack>

                    <VStack>
                        <HStack ml={2} justifyContent={'center'}>
                            <Button onClick={decrement} size={['xs', 'sm', 'md']}>
                                <Text mt={3} fontSize={['0.55rem', '0.65rem', '0.75rem']}>
                                    <FaMinus />
                                </Text></Button>
                            <Text mt={3}>{Quantity}</Text>
                            <Button onClick={incerment} size={['xs', 'sm', 'md']}>
                                <Text mt={3}>
                                    <FaPlus />
                                </Text>
                            </Button>
                        </HStack>

                    </VStack>

                    <VStack>
                        <Text>${cart.price * Quantity }</Text>
                    </VStack>
                    <VStack>
                        <Button size={['xs', 'sm', 'md']} mr={'8'} fontSize={['0.85rem','0.95rem','1rem']} onClick={() => dispatch(remove(cart))}><MdDelete/></Button>
                    </VStack>
                </HStack>
            </Container>

        </>
    )
}
export default Cart