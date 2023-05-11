import React from "react";
import { useState, useEffect } from "react";
import { Input, Stack, Container, Box, SimpleGrid, VStack, StackDivider, Flex, Center, Text} from "@chakra-ui/react";
import Searchbar from "../Searchbar";
import { useSelector } from "react-redux";
import MoviesIndexItem from "../MovieIndexItem";

import styles from "./movieindex.module.css"

export default function MoviesIndex(){
    const stateMovies = useSelector(state => state.movies)
    const [movies, setMovies] = useState()

    useEffect(() => {
        if(Object.values(stateMovies).length > 0){
            setMovies(stateMovies.movies)
        }
    },[stateMovies])

    useEffect(() => {
        console.log("movies", movies)
    },[movies])


if(movies !== undefined){
    return (
        <>

 
            {movies  && 
        
<SimpleGrid columns={4} pacingX='10px' spacingY='20px' className={styles.movies_index_container} >
    {Object.values(movies).map((movie,i) => (<MoviesIndexItem movieData={movie} key={i}></MoviesIndexItem>))}
      </SimpleGrid>
                
    
              
            }
       


        </>
    )
}else{
    return (
  
        <Center>
            <Text color="white" size="lg" fontSize="50px">Enter a Movie Title Above to Begin Search</Text>
        </Center>

    )
}


}