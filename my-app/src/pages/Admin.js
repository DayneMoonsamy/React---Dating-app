import React, {useState} from "react";
import "../App.css";
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import { Grid, TextArea, Button, Form, Dropdown, Card, Rating, Image,Label } from 'semantic-ui-react'



function Review(user) {
    const [results, setResults] = useState([]);
    const [cust, setCust] = useState([]);
    const [rid, setRID] = useState("");
    const [cid, setCID] = useState(true);

    React.useEffect(() => {

        fetch("/api")
        .then((res) => res.json())
        .then((data) => {setResults(data.message)})

        fetch("/apiCust")
        .then((res) => res.json())
        .then((data) => {setCust(data.message)})
        // let form2 = {
        //     id: user.props.id,
        //   };
        //   console.log(user.props.id)
        //   form2 = JSON.stringify(form2);
        //   let rate =0;
        // fetch('/Rrating', {
        //     method: 'post',
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json'
        //     },
        //     body: form2
        //     }).then(res => res.json())
        //     .then(res => {
        //         console.log(res.message)
        //         for(let i=0; i< (res.message).length; i++)
        //             rate += res.message[i].useful
        //         let x = (Math.round(100*(rate/(res.message).length)))/100
        //         setRRating(x)
        //         setLength((res.message).length)
        //     }); 
    }, []);  


        function handleSubmit(e)
        {
            let form = {
                uID: parseInt(e.target.id.value),
                type: "Review",
                rID: user.props.id
              };
            form = JSON.stringify(form);
            fetch('/submitReview', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: form
                }).then(res => res.json())
                .then(res => {
                    console.log(res.message)});  
        }

  return(
    <>
      <br></br><br></br>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='6'>
          <Form.Input label='Reviewer ID' width={3} placeholder='Enter Reviewer ID' onChange={(e) => setRID(e.target.value)}/><br></br>        
        </Form.Group>
        <Form.Button>Submit</Form.Button>
        </Form>
        <br></br><br></br>
        <Form onSubmit={handleSubmit}>
        <Form.Group widths='6'>
          <Form.Input label='Customer ID' width={3} placeholder='Enter Customer ID' onChange={(e) => setCID(e.target.value)}/><br></br>        
        </Form.Group>
        <Form.Button>Submit</Form.Button>
        </Form>
    </>
    )}

export default Review;