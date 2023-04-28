import React from "react";
import styles from "./headerbar.module.css"
import Searchbar from "../Searchbar";

export default function HeaderBar(){
    return (
        <>
            <div className={styles.header_container}>
               <Searchbar></Searchbar>
            </div>
        </>
    )
}