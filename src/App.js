import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Actioncard from './components/Actioncard'
import Navigation from './components/Navigation'
import Profile from './components/Profile';
import './App.css';
import styled from "styled-components"



function App() {


  const [loading, setLoading] =  useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[loading]);

  return (
    <div className="app">
      <Router>
        <div className="device-container">
          <Holder>
            <Switch>
              <Route exact path='/'>
                <Actioncard isLoading={loading}/>
              </Route>
              
              <Route  path='/search'>
                Search component here
              </Route>

              <Route  path='/create'>
                create component here
              </Route>

              <Route  path='/inbox'>
                inbox component here
              </Route>

              <Route  path='/profile'>
                <Profile />
              </Route>
            </Switch>
          </Holder>

          <Navigation setLoading={setLoading}/>

        </div>      
      </Router>

      {/* <Test></Test> */}
    </div>
  );
}



const Holder = (props)=>{

  const Layoutdiv = styled.div`
    width:100%;
    height:93%;
    box-shadow: inset 3px 0px 2px 0px white,
        inset -3px 0px 2px 0px white
    ;
    border-radius: 1em;
`;

  return (
    <Layoutdiv>
      {props.children}
    </Layoutdiv>
  )
}

export default App;
