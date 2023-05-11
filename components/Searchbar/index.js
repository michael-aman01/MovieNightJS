import React from "react";
import {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux";
import { Input, Stack, Spacer, Container, Box, Button, Flex, ButtonGroup, Heading } from "@chakra-ui/react";
import style from "./searchbar.module.css"
import MoviesIndex from "../MoviesIndex";
import { addMovies } from "../../pages/store/movies";


export default function Searchbar(){
    const [title, setTitle] = useState("")
    const [data, setData] = useState()
    const [searchResults, setSearchResults] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        if(searchResults !== undefined){
            dispatch(addMovies(searchResults))
        }
    },[searchResults])

    const getData = async () => {
        if(title.length === 0){
            alert("Please enter a movie title")
            return null
        }
        try{
         
            const params = new URLSearchParams({s: title, r: "json"})
            
            const req = await fetch(`api/search/`, {
                method: "POST", 
                body: JSON.stringify({"title":title}),
            })
            const data = await req.json()
            
            setSearchResults(data.filter(movie => movie.Type === "movie"))
        }catch(error){
            alert("sorry no search results found! Try another title")
        }
    }

    return (
        <>


  <Flex color="white" minWidth='max-content' w="500px" bg="transparent" alignItems='center' gap='2' justifyContent="center">
  <Box p='2' >
    <Heading size='lg'>
        <Input placeholder="Search for Movie" variant="outline" w="500px" size="lg" onChange={(e) => setTitle(e.target.value)}></Input>
    </Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='teal' onClick={getData}>Search</Button>

  </ButtonGroup>
</Flex>



</>
    )

 


}