import HeaderBar from "../HeaderBar";

import React from "react";
import {useState} from "react"

import {Flex} from '@chakra-ui/react'

import MoviesIndex from "../MoviesIndex";

import { useSelector } from "react-redux";

import styles from "./app.module.css"


export default function App(){
  const [showBookmarks, setShowBookmarks] = useState(false)

  const bookmarks = useSelector(state => state.bookmarks)
  const [latestBookmarks,  setLatestBookmarks] = useState(bookmarks.current)



    return(
        <>
    <Flex className={styles.app_container} minHeight="100vh" width="100vw" height="100vh" backgroundColor="#6a52ff4d" flexDirection="column">
    <HeaderBar></HeaderBar>
      
      <MoviesIndex></MoviesIndex>
    </Flex>

        </>
    )
}