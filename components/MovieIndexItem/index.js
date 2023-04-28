import React from "react";
import { useEffect, useState } from "react";
import {Card, Flex, Stack, Heading, CardBody, CardFooter, Button, Image, CardHeader, Text,Box,  VStack, StackDivider} from "@chakra-ui/react"

export default function MoviesIndexItem({movieData}){

    return (
        <>
        {movieData && (

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
   src={movieData.Poster}

  />

  <Stack>
    <CardBody>
      <Heading size='lg'>{movieData.Title}</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
            Add to Bookmarks
      </Button>
    </CardFooter>
  </Stack>
</Card>

    )}
        </>
    )
    
}