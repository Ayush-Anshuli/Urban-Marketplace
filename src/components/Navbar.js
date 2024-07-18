import React, { useState } from 'react';
import { HStack, Text, VStack, useMediaQuery, Button } from '@chakra-ui/react';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { useFirebase } from '../Firebase'; // Import useFirebase hook

const Navbar = () => {
    const { isSignedIn, signOutUser, user } = useFirebase(); // Destructure from useFirebase hook
    const [islarger] = useMediaQuery("(min-width: 768px)");
    const [showmenu, setShowmenu] = useState(false);

    const togglemenu = () => {
        setShowmenu(!showmenu);
    };

    const items = useSelector((state) => state.cart.cart);

    return (
        <>
            {/* Top Sale banner */}
            <HStack justifyContent='center' fontSize={['0.71rem', '0.95rem']} p={3} bg='black' color='gray.200' mb={5} fontFamily='Montserrat'>
                <Text> Sale - Get Free Express Delivery. <span style={{ fontWeight: 'bold' }}>Shop Now</span></Text>
            </HStack>

            {/* Main Navbar */}
            <HStack justifyContent='space-between' p={5} pl={8} pr={12} m={2} fontSize='1.25rem' borderBottom='1px solid gray' pb={5}>
                <Link to='/'>
                    <Text fontFamily='Dancing Script' fontWeight='bold' fontSize={['1.42rem', '2rem', '2rem']}>Urban Marketplace</Text>
                </Link>

                {/* Desktop menu */}
                {islarger ? (
                    <HStack gap={10} fontFamily='Montserrat'>
                        <Link to='/'><Text mt={2}>Home</Text></Link>
                        <Link to='/about'><Text mt={2}>About</Text></Link>
                        <Link to='/allproducts'><Text mt={2}>Collections</Text></Link>
                        {isSignedIn ? ( // Conditional rendering based on sign-in status
                            <>
                                <Link to={`/user/${user.uid}`}><Text mt={2}>Profile</Text></Link>
                                <Button onClick={signOutUser}>Sign Out</Button>
                            </>
                        ) : (
                            <>
                                <Link to='/register'><Text mt={2}>Sign Up</Text></Link>
                                <Link to='/login'><Text mt={2}>Login</Text></Link>
                            </>
                        )}
                        <HStack cursor='pointer' fontSize='1.5rem'>
                            <Link to='/cart'><IoCartOutline fontSize={'2rem'} /></Link>
                            <Text fontSize='1.12rem'>{items.length}</Text>
                        </HStack>
                    </HStack>
                ) : (
                    // Mobile menu toggle
                    <VStack>
                        <Text fontSize={'1.5rem'} cursor='pointer' onClick={togglemenu}><GiHamburgerMenu /></Text>
                    </VStack>
                )}
            </HStack>

            {/* Mobile menu */}
            {showmenu && (
                <VStack bg="black" color="white" py={4} display={{ base: "block", md: "none" }} p={7}>
                    <Link to='/'><Text fontSize="xl" mb={2} onClick={togglemenu}>Home</Text></Link>
                    <Link to='/about'><Text fontSize="xl" mb={2} onClick={togglemenu}>About</Text></Link>
                    <Link to='/allproducts'><Text fontSize="xl" mb={2} onClick={togglemenu}>Collections</Text></Link>
                    <Link to='/cart'><Text fontSize="xl" mb={2} onClick={togglemenu}>Cart</Text></Link>
                    {isSignedIn ? (
                        <>
                            <Link to={`/user/${user.uid}`}><Text fontSize="xl" mb={2} onClick={togglemenu}>Profile</Text></Link>
                            <Button onClick={signOutUser}>Sign Out</Button>
                        </>
                    ) : (
                        <>
                            <Link to='/register'><Text fontSize="xl" mb={2} onClick={togglemenu}>Sign Up</Text></Link>
                            <Link to='/login'><Text fontSize="xl" mb={2} onClick={togglemenu}>Login</Text></Link>
                        </>
                    )}
                </VStack>
            )}
        </>
    );
};

export default Navbar;
