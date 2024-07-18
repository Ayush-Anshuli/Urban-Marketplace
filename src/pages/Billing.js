import { Container, HStack, Input, VStack, Text, Radio, RadioGroup, Stack, Button, Image, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter, } from '@chakra-ui/react'
import React, { useState } from 'react'
import visa from '../assets/visa.png'
import { Link } from 'react-router-dom'
import {clear} from '../App/cartSlice'
import { useDispatch } from 'react-redux'

const Billing = () => {


  const [value, setvalue] = useState('1')

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [coupon, setcoupon] = useState('')
  const [valid, setValid] = useState(false);


  const [open, setopen] = useState(false);
  const [texted, settexted] = useState("");


  const submitcoupn = () => {
    if (coupon === 'Ayush50' || coupon === 'ayush50' || coupon === 'brandy50' || coupon === 'brandy100' || coupon === 'Brandy100') {
      setValid(true)
      setcoupon('')
      opened("Coupon Applied Successfully")
      // console.log('applies')
    }

    else if (coupon === "") {
      opened("Please Write The Coupon Code")
    }

    else{
      opened('Invalid Coupon Code')
    }

  }

  const dispatch = useDispatch()
  const clearcart = () => {
    onOpen()
    dispatch(clear())
  }

  const close = () => setopen(false);
  const opened = (text) => {
    setopen(true)
    settexted(text);
  }

  return (
    <>
      <Container maxW={['container.sm', 'container.lg', 'container.xl']}>

        <Text p={5} mt={10} fontSize={'2rem'} fontFamily={'monospace'}>Billings Details</Text>

        <HStack justifyContent={'space-between'}>

          <VStack w={900} mt={12} p={5} mb={16} >
            <Input placeholder='Enter Your Name' variant='unstyled' p={3} border={'1px solid lightgray'} />
            <Input placeholder='Address' variant='unstyled' p={3} border={'1px solid lightgray'} />
            <Input placeholder='Landmark - Flat No. Building (Optional)' variant='unstyled' p={3} border={'1px solid lightgray'} />
            <Input placeholder='City/Town' variant='unstyled' p={3} border={'1px solid lightgray'} />
            <Input placeholder='821 XXX XX82' variant='unstyled' p={3} border={'1px solid lightgray'} />
            <Input placeholder='Email' variant='unstyled' p={3} border={'1px solid lightgray'} />
          </VStack>
        </HStack>

        <VStack border={'1px solid lightgray'} p={3}>
          <Text color={'red.500'} fontSize={'1.8rem'} fontFamily={'monospace'}>Payment Method</Text>
          <RadioGroup value={value} onChange={setvalue}>
            <Stack>
              <HStack>

                <Radio value='1'>pay via Online</Radio>
                <Image src={visa} h={5} />

              </HStack>

              <Radio value='2'> Cash on Delivery</Radio>

            </Stack>
          </RadioGroup>

          <Stack direction={'row'}>
            <Input htmlSize={['12']} width={['150px', 'auto']} placeholder='Coupon Code' mt={10} ml={5} fontFamily={'monospace'} value={coupon} onChange={(e) => setcoupon(e.target.value)} />

            <Button mt={10} bg={'red.500'} color={'white'} ml={2} fontFamily={'monospace'} value={valid} onClick={submitcoupn}>Apply Coupon</Button>

            <Modal backScrollOnMount={false} isOpen={open} onClose={close} isCentered >
              <ModalOverlay />

              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontSize={'1.25rem'} fontWeight={'bold'} fontFamily={'monospace'}>
                    {texted}
                  </Text>
                </ModalBody>

              </ModalContent>

            </Modal>

          </Stack>



          <Button onClick={clearcart} bg={'red.500'} color={'white'} >Proceed To Pay</Button>
          <Modal backScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered >
            <ModalOverlay />

            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Text fontSize={'1.25rem'} fontWeight={'bold'} fontFamily={'monospace'}>
                  Payment Done Successfully
                </Text>
                <Text>The Item will be deliverd to you soon</Text>
              </ModalBody>

              <ModalFooter>
                <Link to={'/'}>
                  <Button bg={'red.500'} color={'white'} fontFamily={'monospace'} >
                    Continue Shopping
                  </Button>
                </Link>

              </ModalFooter>

            </ModalContent>

          </Modal>

        </VStack>
      </Container>


    </>
  )
}

export default Billing