import React from "react";
import { useEffect, useState } from "react";
import {Card, Flex, Tag, Tab, TabList, Tabs, TabIndicator, TabPanels , TabPanel, Stack, Heading, AspectRatio, CardBody, CardFooter, Button, Image, CardHeader, Text,Box,  VStack, StackDivider, Container, Divider, Center} from "@chakra-ui/react"
import { addBookmarkToStorage, loadBookmarks } from "../../pages/store/bookmarks";
import { useDisclosure } from '@chakra-ui/react'
import { useSelector, useDispatch } from "react-redux";
import { removeBookmark } from "../../pages/store/bookmarks";
export default function MoviesIndexItem({movieData}){
    const detailKeys = Object.keys(movieData).slice(0,9)
    const [currentBookmarks, setCurrentBookmarks] = useState([])
    const bookmarks = useSelector(state => state.bookmarks)

    useState(() => {
      if(bookmarks.current.length === 0 || bookmarks.current.length != currentBookmarks.length){
        let newData = loadBookmarks()
        setCurrentBookmarks(newData)

      }
    },[bookmarks])

    const dispatch = useDispatch()



    const handleAddBookmark = (e, info) => {
      e.preventDefault()
      dispatch(addBookmarkToStorage(info))
      let newBookMarks = loadBookmarks()
      setCurrentBookmarks(newBookMarks)
      
      return bookmarks
      }


      const handleBookmarkRemoval = (e) => {
        e.preventDefault()
        dispatch(removeBookmark(e.target.id))
        let newBookMarks = loadBookmarks()
        setCurrentBookmarks(newBookMarks)
        
    }
    
    return (
        <>
        {movieData && bookmarks.current && (
       
          <Container>
        
                <Card>
                  <CardHeader>
                  <Center>
                  <Image src={movieData.Poster} objectFit='fill' justifyContent="center"/>
                  </Center>
                  <Center>
                  <Heading>{movieData.Title}</Heading>
                
                  </Center>
                  <Center>
                    <Flex justifyContent="space-between">
                    {movieData.Genre.split(",").map(genre => <Tag color>{genre.replace(",","")}</Tag>)}
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
          {detailKeys.map(key => (<>
        <Flex justifyContent="space-between">
   
            <Text as="u">{key}: </Text>
            <Text>{movieData[key]}</Text>
          </Flex></>))}
      </TabPanel>
    </TabPanels>
  </Tabs>
  <Center>


            {currentBookmarks.filter(movie => movie.imdbID === movieData.imdbID).length === 0 ?   <Button id={movieData.imdbID} onClick={(e) => handleAddBookmark(e, movieData)}>Add to Bookmarks</Button> : <Button id={movieData.imdbID} onClick={handleBookmarkRemoval}>Remove from Bookmarks</Button>}

         </Center>
                  </CardBody>
                </Card>
 
          </Container>

        )}
        </>
    )
    
}