import React, { useEffect } from "react";
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
    const [currentButton, setCurrentButton] = useState()

    useState(() => {
      if(currentBookmarks.length === 0){
        let b = loadBookmarks()
        setCurrentBookmarks(b)
        

      if(b.filter(movie => movie.imdbID === movieData.imdbID).length === 0){
       setCurrentButton(bookmarkButton(movieData, "green", "Add to Bookmarks"))
      }else{
        setCurrentBookmarks(null)
      }
                     
    }

      
    },[])

    // useEffect(() => {
    //   //detect removal of bookmark from bookmark index and readd green button
    //   if(currentButton === null){
    //     let current = loadBookmarks()
    //     console.log(current)
    //     if(current !== null){
    //       current.filter(movie => movie.imdbID === movieData.imdbID).length === 0 ? setCurrentButton(bookmarkButton(movieData, "green", "Add to Bookmarks")) : setCurrentButton(null)
    //     }
    //   }


      
    // }, [bookmarks])



    useState(() => {
      if(bookmarks.current.length === 0 || bookmarks.current.length != currentBookmarks.length){
        let newData = loadBookmarks()
        setCurrentBookmarks(newData)

      }
    },[bookmarks, currentBookmarks])

    const dispatch = useDispatch()



    const handleAddBookmark = (e, info) => {
        e.preventDefault()
        dispatch(addBookmarkToStorage(info))
        let newBookMarks = loadBookmarks()
        setCurrentBookmarks(newBookMarks)
        setCurrentButton(null)
        return bookmarks
      }


      const handleBookmarkRemoval = (e) => {
        e.preventDefault()
        dispatch(removeBookmark(e.target.id))
        let newBookMarks = loadBookmarks()
        setCurrentBookmarks(newBookMarks)
        
    }
    function bookmarkButton(data,  color, buttonText){
    return (
      <Button colorScheme={color}  leftIcon={<AddIcon />} id={data.imdbID} onClick={(e) => handleAddBookmark(e, data)}>{buttonText}</Button>
    )
}

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
