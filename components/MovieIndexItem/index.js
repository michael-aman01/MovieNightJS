import React from "react";
import { useEffect, useState } from "react";


export default function MoviesIndexItem(){
    const [title, setTitle] = useState("Avengers Endgame")
    const [data, setData] = useState()
    const [searchResults, setSearchResults] = useState()

    const getData = async () => {
        try{
            const params = new URLSearchParams({s: title, r: "json"})
            const req = await fetch(`api/search/`, {
                method: "POST", 
                body: JSON.stringify({"title":title}),
            })
            console.log(req)
            setSearchResults(req)
        }catch(error){
            console.log(error)
        }
    }



    return (
        <>
            <div>
               <button onClick={getData}>get moviesw</button>
            </div>
            {searchResults && (
                <div>
                    Data retrieved
                </div>
            )}
        </>
    )
    
}