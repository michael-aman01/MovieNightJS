import React from "react";
import styles from "./headerbar.module.css"
import Searchbar from "../Searchbar";

import { Flex, Box, Spacer, Container, Center } from "@chakra-ui/react";
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
    <Box w='180px' h='10' bg='red.500' ></Box>
  </Flex>

     
        </>
    )
}