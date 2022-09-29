import React, {useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
import {myContext} from './ContextProvider'

function App() {
  const {theme}= useContext(myContext)
  return (
    <main className={theme}>
      <Header />
      <Profile/>
    </main>
  );
}

export default App;
