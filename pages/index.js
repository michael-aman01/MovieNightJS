import React from "react";
import App from "../components/App";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import configureStore from './store/index';
import { useDispatch } from 'react-redux';


export default function Main(){
  let store = configureStore({});
// if (process.env.NODE_ENV !== 'production') {
//   window.store = store;
//   window.storage = sessionStorage
//   window.sessionActions = sessionActions;
// }

  return (
    <>
    <Provider store={store}>

    <ChakraProvider>
      <App></App>
    </ChakraProvider>
          
    </Provider>

    </>
  )
}