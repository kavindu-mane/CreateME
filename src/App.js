import Header from "./components/HeadeNFooter/Header";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Error from "./pages/Error";
import Footer from "./components/HeadeNFooter/Footer";
import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import DataProvider from "./components/Providers/DataProvider";
import ScrollToTop from "./components/Common/ScrollToTop";
import "./resources/styles.css"

const linkedObject = {
  "/":<Home/> ,
  "/create": <DataProvider><Create/></DataProvider> ,
}

const addScrollToTop = () => {
  const docH = document.documentElement.scrollHeight
  const element = document.getElementById("scroll-top")
  if(window.scrollY > 100 && (window.innerHeight + 100) < docH){
    element.classList.add("scroll-btn-show")
  }else{
    element.classList.remove("scroll-btn-show")
  }
}  

function App() {
  return (
    <React.Fragment>
      <div style={{minHeight:"100vh"}}>
        <Header/>
          <Router>
            <Routes>
              {Object.keys(linkedObject).map(key => (
                <Route key = {key} path = {key} element = {linkedObject[key]}/>
              ))}
              {<Route path = "*" element = {<Error/>}/>}
            </Routes>
          </Router>
        <ScrollToTop/>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

window.addEventListener("scroll" , () =>{
  const element = document.querySelector(".header-bg")
  if(window.scrollY > 50){
    element.style.backgroundColor = "var(--background-color)"
    element.style.boxShadow = "0 5px 20px var(--shadow-color)"
  }else{
    element.style.backgroundColor = "transparent"
    element.style.boxShadow = "none"
  }

  addScrollToTop()

});

export default App;
