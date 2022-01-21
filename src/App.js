import React from "react";
import './App.css'
import HomePage from "./components/HomePage";
import VideoPage from "./components/VideoPage";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import AnyPhoto from "./components/AnyPhoto";
import video from'./img/Earth_Background.mp4';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>

      <video className="video" autoPlay loop muted>
        <source src={video}/>
      </video>

      <div className="homePage">
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={HomePage}>
              <HomePage/>
            </Route>
            <Route path="/anyphoto" exact component={AnyPhoto}>
              <AnyPhoto/>
            </Route>
            <Route path="/videos" exact component={VideoPage}>
              <VideoPage/>
            </Route>
          </Switch>
        </Router>

      </div>
      <ScrollToTop/>
    </>
  )
}

export default App;
