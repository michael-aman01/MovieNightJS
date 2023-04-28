import HeaderBar from "../HeaderBar";
import styles from "./app.module.css"
import React from "react";

import MoviesIndexItem from "../MovieIndexItem";
import {  Grid, GridItem } from '@chakra-ui/react'
import Searchbar from "../Searchbar";
import MoviesIndex from "../MoviesIndex";
export default function App(){
    return(
        <>
<Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='100vh'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
        <Searchbar></Searchbar>
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>

    <MoviesIndex></MoviesIndex>

  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>
        </>
    )
}