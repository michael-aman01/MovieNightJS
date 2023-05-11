import React from "react";
import styles from "./headerbar.module.css"
import Searchbar from "../Searchbar";
import { Flex, Box, Spacer, Container } from "@chakra-ui/react";

export default function HeaderBar(){
    return (
        <>
  <Flex bg="transparent">
    <Box w='70px' h='10' bg='red.500' />
    <Spacer />
    <Box w='33%'  bg="transparent">
        <Container centerContent bg="transparent">
             <Searchbar></Searchbar>
        </Container>

    </Box>
    <Spacer />
    <Box w='180px' h='10' bg='red.500' ></Box>
  </Flex>

     
        </>
    )
}