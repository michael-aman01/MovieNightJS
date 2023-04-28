import React from "react";
import { Flex, Spacer, Center, Text, Square, Box, Grid, GridItem } from '@chakra-ui/react'

export default function Layout({children}){
    return (
<Grid
  h='100vh'
  w='100vw'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={3}
>



  <GridItem colSpan={4} rowspan={4} bg='tomato' />
  <GridItem rowSpan={1} colSpan={1} bg='tomato' />
</Grid>
    )
}