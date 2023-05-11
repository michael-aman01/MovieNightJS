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

<Flex style={{"width":"100vw", "height": "100vh", "justifyContent":"center", "backgroundColor":"green", "padding":"5%"}}>
 
            {movies  && 
        
<SimpleGrid columns={4} pacingX='40px' spacingY='20px'>
    {Object.values(movies).map((movie,i) => (<MoviesIndexItem movieData={movie} key={i}></MoviesIndexItem>))}
      </SimpleGrid>
                
    
              
            }
       
</Flex>

        </>
    )

}