import React from "react";
import { useState } from "react";
import {Card, Flex, Tag,  Center, Stack, Heading, CardBody, CardFooter, Button, Image,  Text, Switch, Spacer, Divider} from "@chakra-ui/react"
import { useDispatch } from "react-redux";
import { removeBookmark, updateBookmarkInStorage } from "../../store/bookmarks";
import { useSelector } from "react-redux";
import { MinusIcon, ViewIcon, ViewOffIcon} from "@chakra-ui/icons";

export default function BookmarksIndexItem({movieData}){
    const dispatch = useDispatch()
    const bookmarks = useSelector(state => state.bookmarks)
    const [watched, setWatched] = useState(movieData.watched)

  
    const handleBookmarkRemoval  = (e) => {
        e.preventDefault()
        dispatch(removeBookmark(e.target.id))
        
        
    }

    const handleWatched = e => {
      e.preventDefault()
      
      if(movieData.watched === true){
        movieData.watched = false
      }else{
        movieData.watched = true
      }
     
      let newBM = dispatch(updateBookmarkInStorage({...movieData}))
      setWatched(movieData.watched)
    }
    return (
        <>
        {movieData && (
       <Card
       direction={{ base: 'column', sm: 'row' }}
       overflow='hidden'
       variant='outline'
     >
   <Image src={movieData.Poster} alt="poster" objectFit='scale-down' justifyContent="center"/>

     
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
            <Center height='50px'>
  <Divider orientation='vertical' />
</Center>
            <Flex>
              {watched === false ?  <Button leftIcon={<ViewOffIcon></ViewOffIcon>} colorScheme='red' onClick={handleWatched}>Not Watched</Button>
              :
              <Button leftIcon={<ViewIcon></ViewIcon>} colorScheme='green' onClick={handleWatched}>Watched</Button>
              }
             
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