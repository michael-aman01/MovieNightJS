import React from "react";
import { useState, useEffect } from "react";
import { Input, Stack, Container, Box, SimpleGrid, VStack, StackDivider, Flex} from "@chakra-ui/react";
import Searchbar from "../Searchbar";
import { useSelector } from "react-redux";
import MoviesIndexItem from "../MovieIndexItem";
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



    return (
        <>

<Flex>
 

  movies: {Object.values(stateMovies).length}
            {movies  && 
        
<VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
  w="90%"
  h="100%"
  padding="10%"
>
    {Object.values(movies).map((movie,i) => (<MoviesIndexItem movieData={movie} key={i}></MoviesIndexItem>))}
        </VStack>
                
    
              
            }
       
</Flex>

        </>
    )

}