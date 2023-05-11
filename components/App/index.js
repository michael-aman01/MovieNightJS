import HeaderBar from "../HeaderBar";
import styles from "./app.module.css"
import React from "react";
import {useState, useEffect} from "react"
import MoviesIndexItem from "../MovieIndexItem";
import {  Button, Grid, GridItem, Text, Box, Flex } from '@chakra-ui/react'
import Searchbar from "../Searchbar";
import MoviesIndex from "../MoviesIndex";
import BookmarksIndex  from "../BookmarksIndex";
import { useSelector } from "react-redux";
import { loadBookmarks } from "../../pages/store/bookmarks";


export default function App(){
  const [showBookmarks, setShowBookmarks] = useState(false)

  const bookmarks = useSelector(state => state.bookmarks)
  const [latestBookmarks,  setLatestBookmarks] = useState(bookmarks.current)
  // useEffect(() => {
  //   let updatedBookmarks = loadBookmarks()
  //   setLatestBookmarks(updatedBookmarks)

  // },[bookmarks])


    return(
        <>



<Grid
 style={{"position":"relative"}}
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}


  h='100vh'
  w="100vw"
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
  position='absolute'
>
  <GridItem pl='1' h="100%" bg='orange.300' area={'header'}>
       <HeaderBar></HeaderBar>
       
  </GridItem>

  

  <BookmarksIndex></BookmarksIndex>




<GridItem pl="1" area={"main"} >
<MoviesIndex></MoviesIndex>
</GridItem>

</Grid>

    





        </>
    )
}