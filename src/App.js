import Header from "./components/Header";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Error from "./pages/Error";
import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

const linkedObject = {
  "/":<Home/> ,
  "/create": <Create/>
}

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Router>
        <Routes>
          {Object.keys(linkedObject).map(key => (
            <Route key = {key} path = {key} element = {linkedObject[key]}/>
          ))}
          {<Route path = "*" element = {<Error/>}/>}
        </Routes>
      </Router>
    </React.Fragment>

  )
}

export default App;
