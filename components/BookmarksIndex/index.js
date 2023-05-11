import React from "react"
import { AddIcon} from '@chakra-ui/icons'

import { useDisclosure, RadioGroup,DrawerCloseButton, Button, Tag, Stack, Radio, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerHeader, CloseButton, Flex } from "@chakra-ui/react"

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import bookmarksReducer, { loadBookmarks } from "../../store/bookmarks";
import MoviesIndexItem from "../MovieIndexItem";
import BookmarksIndexItem from "../BookmarkIndexItem";

export default function BookmarksIndex(){
const { isOpen, onOpen, onClose } = useDisclosure()
const [placement, setPlacement] = React.useState('right')
const localBookmarks = useSelector(state => state.bookmarks)
const [currentBookmarks, setCurrentBookmarks] = useState([])
const dispatch = useDispatch()

useEffect(() => {
  let data = loadBookmarks()
  setCurrentBookmarks(data)
},[])
useEffect(() => {
  if(currentBookmarks !== localBookmarks){
    const b = loadBookmarks()
    setCurrentBookmarks(b)
  }
},[localBookmarks])



if(currentBookmarks){
return (
  <>

  
    <Button onClick={onOpen} size="md" style={{"position":"sticky", "top":50, "width":"fit-content", "height":"100%", "zIndex":2}} variant='solid' colorScheme="teal">
        Edit Bookmarks
    </Button>
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="lg">

      <DrawerOverlay />
      <DrawerContent>
  
      <DrawerHeader borderBottomWidth='1px'>
      <Flex justifyContent="space-between">
          <div>Bookmarked Movies</div> 
          <DrawerCloseButton></DrawerCloseButton>
      </Flex>
        </DrawerHeader>


        <DrawerBody>

            <>

              { currentBookmarks.length > 0 ?  currentBookmarks.map((bookmark,i)=> <BookmarksIndexItem key={i} movieData={bookmark}></BookmarksIndexItem>) : <p>No bookmarks saved yet!</p>}

            </>

          

        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
)
}
}