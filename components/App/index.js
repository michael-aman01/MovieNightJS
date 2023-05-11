import HeaderBar from "../HeaderBar";

import React from "react";
import {useState, useEffect} from "react"
import MoviesIndexItem from "../MovieIndexItem";
import {  Button, Grid, GridItem, Text, Box, Flex, Container } from '@chakra-ui/react'
import Searchbar from "../Searchbar";
import MoviesIndex from "../MoviesIndex";
import BookmarksIndex  from "../BookmarksIndex";
import { useSelector } from "react-redux";
import { loadBookmarks } from "../../store/bookmarks";
import styles from "./app.module.css"
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
    <Flex className={styles.app_container} minHeight="100vh" width="100vw" height="100vh" backgroundColor="#6a52ff4d" flexDirection="column">
    <HeaderBar></HeaderBar>
      
      <MoviesIndex></MoviesIndex>
    </Flex>



    





        </>
    )
}