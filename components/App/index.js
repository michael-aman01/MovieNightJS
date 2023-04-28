import HeaderBar from "../HeaderBar";
import styles from "./app.module.css"
import React from "react";
import Layout from "../Layout"
import MoviesIndexItem from "../MovieIndexItem";
export default function App(){
    return(
        <>

        <div>

            <HeaderBar></HeaderBar>
            <MoviesIndexItem></MoviesIndexItem>
        </div>
        </>
    )
}