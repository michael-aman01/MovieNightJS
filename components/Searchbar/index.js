import React from "react";
import {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux";
import { Input, Stack, Spacer, Container, Box, Button, Flex, ButtonGroup, Heading } from "@chakra-ui/react";
import style from "./searchbar.module.css"
import MoviesIndex from "../MoviesIndex";
import { addMovies } from "../../pages/store/movies";


export default function Searchbar(){
    const [title, setTitle] = useState("Avengers Endgame")
    const [data, setData] = useState()
    const [searchResults, setSearchResults] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        if(searchResults !== undefined){
            dispatch(addMovies(searchResults))
        }
    },[searchResults])

    const getData = async () => {

        try{
            const params = new URLSearchParams({s: title, r: "json"})
            const req = await fetch(`api/search/`, {
                method: "POST", 
                body: JSON.stringify({"title":title}),
            })
            const data = await req.json()
            console.log(data)
            setSearchResults(data.Search)
        }catch(error){
            console.log(error)
        }
    }

    return (
        <>


  <Flex minWidth='max-content' alignItems='center' gap='2' justifyContent="center">
  <Box p='2' >
    <Heading size='lg'>
        <Input placeholder="Search for Movie" variant="outline"></Input>
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