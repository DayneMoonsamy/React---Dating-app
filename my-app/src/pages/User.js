import React, {useState} from "react";
import "../App.css";
import { Grid,  Button, Form, Dropdown, Card, Rating, Image, Menu } from 'semantic-ui-react'
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


function User(user) {
    const [rData, setRData] = useState("");
    const [results, setResults] = useState([]);
    const [submitReviewers, setSubmitReviewers] = useState([]);
    const [arrR, setArr] = useState([]);
    const [R, setR] = useState("");
    const [arr, setChange] = useState(true)
    // console.log(user.props)
    // console.log(user.props.id)

    React.useEffect(() => {
        fetch("/api")
        .then((res) => res.json())
        .then((data) => {setRData(data.message)
        console.log(data.message)
        let reviwers = data.message
        var arr = [];
        console.log(rData)
        for(var i=0; i<reviwers.length; i++)  
        {
            arr.push({key: reviwers[i].id, text: reviwers[i].name + " -  " + reviwers[i].description,  value:reviwers[i].id, image:reviwers[i].picture});
        }
        setArr(arr)     
        console.log(arr)});

        let str = ""
        let form = {
            type: "User",
            id: user.props.id
          };
        form = JSON.stringify(form);
        console.log("form")    
        fetch('/fetchReview', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: form
            }).then(res => res.json())
            .then(res => { console.log(res.message)
                setResults(res.message)
            });  
        }, [arr]);  

    function handleSubmit(event)
    { 
        let form = {
            rating: R,
            id: event.target.id.value

          };
        form = JSON.stringify(form);
        fetch('/userRate', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: form
            }).then(res => res.json())
            .then(res => {setChange(!arr)});  
    }

    async function handleReview()
    {
        let form={}
    for(var i =0; i<(submitReviewers.length); i++)
    {
        form = {
            submit: submitReviewers[i],
            id: user.props.id
          };
        form = JSON.stringify(form);
        await fetch('/userhandleReview', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: form
            }).then(res => res.json())
            .then(res => { 
            });
        }
        alert("Success")  
    }
    
    function handleC(e, {rating})
    {
        setR(rating)
    }

    function handleArr(e, {value})
    {
        setSubmitReviewers(value)
    }


  return(
   <>
   <div className="skills">
    <h3>Select Reviewers: </h3>
    <br></br>
    <br></br>
    <br></br>
    </div>
        <Form onSubmit={handleReview}>
        <div className="skills">
            <Dropdown fluid placeholder='Skills' multiple selection options={arrR} onChange={handleArr}/>
            <br></br>
            <br></br>
            <Form.Button>Submit</Form.Button></div>
        </Form>
    <br></br>
    <br></br>
    <br></br>
    <div className="topB">
    <h2>Pending Reviews: </h2>
    <br></br>
    <br></br>
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        >
    <Card.Group>
        {results.length==0 ? <strong>None</strong> : results.map((e, index) =>{
             return(  
                <Form onSubmit={handleSubmit}>
                  <Card>
                         <Card.Content>
                            <Image
                                floated='right'
                                size='mini'
                                src={e.picture}
                            />
                            <Card.Header>{(e.rating)}/6</Card.Header>
                            <Card.Meta>by {e.name}</Card.Meta>
                            <Card.Description>
                                <strong>{e.description}</strong>
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div>
                                    <br></br>
                                    <Rating icon='heart' defaultRating={1} maxRating={6} onRate={(handleC)}/>
                                </div>
                                <input type="hidden" name="id" value={e.id}/>
                            </Card.Content><br></br>
                        <Form.Button>Submit</Form.Button>
                        <br></br>
                    </Card>
                    </Form>)
        })
    }
  </Card.Group></Grid></div>
  </>
        )
}

export default User;