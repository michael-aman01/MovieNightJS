import React from "react";

import {Card, Flex, Tag,  Stack, Heading, CardBody, CardFooter, Button, Image,  Text} from "@chakra-ui/react"
import { useDispatch } from "react-redux";
import { removeBookmark } from "../../store/bookmarks";
import { useSelector } from "react-redux";
import { MinusIcon } from "@chakra-ui/icons";

export default function BookmarksIndexItem({movieData}){
    const dispatch = useDispatch()
    const bookmarks = useSelector(state => state.bookmarks)

    const handleBookmarkRemoval = (e) => {
        e.preventDefault()
        dispatch(removeBookmark(e.target.id))
        
        
    }
    return (
        <>
        {movieData && (
       <Card
       direction={{ base: 'column', sm: 'row' }}
       overflow='hidden'
       variant='outline'
     >
   <Image src={movieData.Poster} objectFit='scale-down' justifyContent="center"/>

     
       <Stack>
         <CardBody>
           <Heading size='md'>{movieData.Title}</Heading>
     
           <Text py='2'>
             {movieData.Plot}
           </Text>
           <Flex justifyContent="space-between">
                  <Tag colorScheme="teal">{movieData.Year}</Tag>
                  <Tag colorScheme="teal">{movieData.Runtime}</Tag>
                  <Tag colorScheme="teal">IMDB Rating: {movieData.imdbRating}</Tag>
                  </Flex>
         </CardBody>
     
         <CardFooter>
         <Button leftIcon={<MinusIcon/>} colorScheme="red" id={movieData.imdbID} onClick={handleBookmarkRemoval}>
             Remove Bookmark
           </Button>
         </CardFooter>
       </Stack>
     </Card>

        )}
        </>
    )
    

}