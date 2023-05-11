import React from "react";
import styles from "./headerbar.module.css"
import Searchbar from "../Searchbar";

import { Flex, Box, Spacer, Container, Center, Image } from "@chakra-ui/react";
import BookmarksIndex from "../BookmarksIndex";


export default function HeaderBar(){
    return (
        <>
  <Flex bg="transparent" justifyContent="space-between" className={styles.header_container}>

  

    <BookmarksIndex></BookmarksIndex>

    <Spacer />
    <Center>
    <Box bg="transparent">
        <Container centerContent bg="transparent">
             <Searchbar></Searchbar>
        </Container>

    </Box>
    </Center>

    <Spacer />
    <Flex justifyContent="space-between" width="10%">
        <Image src="./linkedin.png" alt="alt" height="50px" width="50px" className={styles.social_media_image} onClick={() => window.open("https://www.linkedin.com/in/maman1/","_blank")}></Image>
        <Image src="./github-logo.svg" alt="alt" height="50px" width="50px" className={styles.social_media_image}  onClick={() => window.open("https://github.com/michael-aman01/MovieNightJS","_blank")}></Image>
    </Flex>

   
  </Flex>

     
        </>
    )
}