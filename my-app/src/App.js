import React, {useState} from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { Button, Form, Dropdown } from 'semantic-ui-react'
import  UReg  from "./UReg.js";
import  RReg  from "./RReg.js";
import Admin from "./pages/Admin"
import User from "./pages/User"
import Review from "./pages/Review"

function App() {
  const [data, setData] = useState(" ");
  const [name, setName] = useState("");
  const [user, setUser] = useState("User")
  const [reg, setReg] = useState(" ")
  const [logger, setLogger] = useState("")
  // const [user, setUser] = useState(" ")
  // const [user, setUser] = useState(" ")
  // const [user, setUser] = useState(" ")
  // const [user, setUser] = useState(" ")

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => {setData(data.message)
  //     console.log(data.message)});
  // }, []);

  function handleSubmit(event) 
  {
    let form = {
      name: name,
      user:user
    };
    form = JSON.stringify(form);

    fetch('/login', {
      method: 'post',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      body: form
      }).then(res => res.json())
      .then(res => {
       console.log(res.message.length)
      if(res.message.length >0)
      {
        console.log(res.message)
        setData(res.message)
        setLogger(user)
      }
      else
        alert("Login failed. Make sure your details are right")
    });   
    event.preventDefault();  
  }

  const subjects= [
    {text: 'User',value: 'user'},
    {text: 'Reviewer',value: 'reviewer'},
    {text: 'Admin', value: 'admin'}
  ]

  const registration= [
    {text: 'User',value: 'user'},
    {text: 'Reviewer',value: 'reviewer'},
  ]

  return (
    <div className="App">
    <Router>
     <Switch>
     <Route path="/user">
          <User
            props={data[0]}
          />
      </Route>
     <Route path="/review">
          <Review
            props={data[0]}
          />
      </Route>
     <Route path="/admin">
          <Admin
            props={data[0]}
          />
      </Route>
    <Route path="/">
    <div className="Select">
      <br></br><br></br>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='6'>
          <Form.Input label='Username' width="16" placeholder='First name' value={name} onChange={(e) => setName(e.target.value)}/><br></br>        
        </Form.Group>
        <strong>Choose User:  </strong><br/>
        <Form.Group widths='6'><Form.Select
            onChange={(e) => setUser(e.target.innerText)}
            options={subjects}
            defaultValue={subjects[0].value}
            name="user"
          /></Form.Group>
        <Form.Button>Submit</Form.Button>
        </Form>
        <br></br><br></br>
    </div>
    <br></br><br></br>
    <h4>Choose Registration option:</h4>
    <div className="top">
    <Form.Group widths='6'><Form.Select onChange={(e) => setReg(e.target.innerText)} options={registration} name="user"/></Form.Group>
    </div>
 {reg=="User" ? (<UReg></UReg>):null}
    {reg=="Reviewer" ? (<RReg></RReg>):null}
    </Route>
    </Switch>
    {(logger=="User") ? (<Redirect to="/User" />): (<Redirect to="/" />)}
    {(logger=="Reviewer") ? (<Redirect to="/Review" />): (<Redirect to="/" />)}
    {(logger=="Admin") ? (<Redirect to="/Admin" />): (<Redirect to="/" />)}
    </Router>  
    </div>
  );
}

export default App;