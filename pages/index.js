import React from "react";
import App from "../components/App";
import { ChakraProvider } from "@chakra-ui/react";
export default function Main(){
  return (
    <>
    <ChakraProvider>
      <App></App>
    </ChakraProvider>

    </>
  )
}