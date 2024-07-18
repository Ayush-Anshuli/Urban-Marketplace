

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box, Text, Image, HStack, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function AutoPlay() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 2000,
  };


  const crausel = [
    {
      "id": 1,
      "image": "https://www.bigbasket.com/media/uploads/p/m/40189244_8-kelloggs-muesli-breakfast-cereal-with-multigrain-21-fruit-nut-seeds.jpg?tr=w-1080,q=80"
    },
    {
      "id": 2,
      "image": "https://www.bigbasket.com/media/uploads/p/l/40216166_4-sri-sri-tattva-whole-wheat-atta.jpg"
    },
    {
      "id": 4,
      "image": "https://www.bigbasket.com/media/uploads/p/m/40157811_10-kelloggs-chocos-moons-stars.jpg?tr=w-1080,q=80"
    }
  ]

  return (
    <>
      <Grid
        h={['200px','250px','300px']}
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={8}
        mt={['1','2','10']}
      >
        <GridItem rowSpan={0} colSpan={['5','5','4']}  >
          <Text mt={2} ml={['2']} fontSize={['0.95rem','1.35rem','1.95rem']} fontFamily="Montserrat">Elevate your Grocery experience with our curated collections</Text>
        </GridItem>
        <GridItem colSpan={['5','5','6']} h={150} >

          <div className="slider-container" >

            <Slider {...settings} >

              {
                crausel.map((item) => (
                  <CrauselCard key={item.id} image={item.image} />
                ))
              }

            </Slider>
          </div>

        </GridItem>
      </Grid>


    </>
  );
}
const CrauselCard = ({ image }) => {
  return (

    <Box p={2} h={['100', '200', '400']}>
      <Image src={image} pb={5}/>
    </Box>

  )
}
export default AutoPlay;
