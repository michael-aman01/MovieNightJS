import React from "react";
import { useState } from "react";
import {Card, Flex, Tag, Tab, TabList, Tabs, TabIndicator, TabPanels , TabPanel, Stack, Heading, AspectRatio, CardBody, CardFooter, Button, Image, CardHeader, Text,Box,  VStack, StackDivider, Container, Divider, Center, Spinner} from "@chakra-ui/react"
import { addBookmarkToStorage, loadBookmarks } from "../../store/bookmarks";

import { useSelector, useDispatch } from "react-redux";
import { removeBookmark } from "../../store/bookmarks";
import { AddIcon } from "@chakra-ui/icons";


export default function MoviesIndexItem({movieData}){
    const detailKeys = Object.keys(movieData).slice(0,9)
    const [currentBookmarks, setCurrentBookmarks] = useState([])
    const bookmarks = useSelector(state => state.bookmarks)


    useState(() => {
      if(currentBookmarks.length === 0){
        let b = loadBookmarks()
        setCurrentBookmarks(b)
      }
    },[bookmarks])


    useState(() => {
      if(bookmarks.current.length === 0 || bookmarks.current.length != currentBookmarks.length){
        let newData = loadBookmarks()
        setCurrentBookmarks(newData)

      }
    },[bookmarks, currentBookmarks])

    const dispatch = useDispatch()


    const handleBookmark = async (e) => {
      let current = await loadBookmarks()
      if(current){
        if(current.filter(movie => movie.imdbID === movieData.imdbID).length === 0){
          dispatch(addBookmarkToStorage(movieData))
  
          setCurrentBookmarks(current)
          setCurrentButton(null)
        
        }
      }
   
      return current
    }

    const handleAddBookmark = (e, info) => {
      e.preventDefault()
    
      
      return bookmarks
      }


 
    const [currentButton, setCurrentButton] = useState(<Button colorScheme="green"  leftIcon={<AddIcon />} id={movieData.imdbID} onClick={handleBookmark}>Add to Bookmarks</Button> )
    return (
        <>

       
          <Container >
        
                <Card>
                  <CardHeader>
                  <Center>
                  <Image src={movieData.Poster} objectFit='fill' justifyContent="center" alt="poster"/>
                  </Center>
                  <Center>
                  <Heading>{movieData.Title}</Heading>
                
                  </Center>
                  <Center>
                    <Flex justifyContent="space-between">
                    {movieData.Genre.split(",").map((genre,i) => <Tag key={i} color>{genre.replace(",","")}</Tag>)}
                    </Flex>
                
                  </Center>
       
              
                  <Center height="50px">
                  <Divider orientation="horizontal" ></Divider>
                  </Center>
               
                  <Flex justifyContent="space-between">
                  <Tag colorScheme="teal">{movieData.Year}</Tag>
                  <Tag colorScheme="teal">{movieData.Runtime}</Tag>
                  <Tag colorScheme="teal">IMDB Rating: {movieData.imdbRating}</Tag>
                  </Flex>

                  </CardHeader>
                  <CardBody>
                  <Tabs position="relative" variant="unstyled">
    <TabList>
      <Tab>Overview</Tab>
      <Tab>Additional Info</Tab>
      
    </TabList>
    <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
    <TabPanels>
      <TabPanel>
            <Text>{movieData.Plot}</Text>
      </TabPanel>
      <TabPanel>
          {detailKeys.map((key,i) => (<>
        <Flex justifyContent="space-between"  key={i}>
   
            <Text as="u" key={i}>{key}: </Text>
            <Text>{movieData[key]}</Text>
          </Flex></>))}
      </TabPanel>
    </TabPanels>
  </Tabs>
  <Center>


         {currentButton}
                     
            

         </Center>
                  </CardBody>
                </Card>
 
          </Container>
        </>
    )
    }
