import React, {useState} from "react";
import "../App.css";
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import { Grid, TextArea, Button, Form, Dropdown, Card, Rating, Image,Label } from 'semantic-ui-react'



function Review(user) {
    const [results, setResults] = useState([]);
    const [name, setName] = useState("");
    const [arr, setArr] = useState(true);
    const [length, setLength] = useState([]);
    const [rating1, setR1] = useState(1);
    const [rating2, setR2] = useState(1);
    const [rating3, setR3] = useState(1);
    const [rating4, setR4] = useState(1);
    const [rating5, setR5] = useState(1);
    const [rRating, setRRating] = useState(0);
    const [text, setText] = useState(true);
    
    React.useEffect(() => {
        let form2 = {
            id: user.props.id,
          };
          console.log(user.props.id)
          form2 = JSON.stringify(form2);
          let rate =0;
        fetch('/Rrating', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: form2
            }).then(res => res.json())
            .then(res => {
                console.log(res.message)
                for(let i=0; i< (res.message).length; i++)
                    rate += res.message[i].useful
                let x = (Math.round(100*(rate/(res.message).length)))/100
                setRRating(x)
                setLength((res.message).length)
            });

        let form = {
            id: user.props.id,
            type: "Review"
          };
          console.log(user.props.id)
        form = JSON.stringify(form);
        fetch('/fetchReview', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: form
            }).then(res => res.json())
            .then(res => {
                console.log(res.message)
                    setResults(res.message)
                });  
        }, [arr]);  


        function handleSubmit(e)
        {
            let form = {
                uID: parseInt(e.target.id.value),
                rating:( rating1+rating2+rating3+rating4+rating5)/5,
                type: "Review",
                text: text,
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
                    console.log(res.message)
                    setArr(!arr) });  
        }
        let history = useHistory();

  return(
    <>
   <br/><br/>
   <h2>Pending Reviews:  </h2>   <br/><br/>
   <div className="Select">
   <Grid columns={5} divided>
    <Card.Group >
        {results.length==0 ?   <div className="Select"><p>None</p></div> : results.map((e, index) =>{
             return( 
                <Grid.Column>
                <Form onSubmit={handleSubmit} key={e.id}>
                <div clasName="space">
                    <Card color='violet' centered>
                        <Image wrapped size='medium' centered rounded src={e.picture}/>
                            <Card.Content>
                                <Card.Header>{e.username} ({e.genderUser})</Card.Header>
                                <Card.Meta>from {e.location}</Card.Meta>
                                <Card.Description>
                                    <strong>{e.userLike}</strong>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content>
                                <Card.Description>
                                    <strong>Interested in: {e.genderMatch}</strong><br></br>
                                    <p> {e.matchLike}</p>
                                </Card.Description>
                            </Card.Content>
                            <br></br>  
                                <Card.Content extra>
                                    <Label color="red" key={1}>Informative:  </Label>
                                    <Rating icon='star' name = "rating1" value="123" defaultRating={1} maxRating={6} onRate={(e, {rating})=>setR1(rating)}>{name}</Rating><br/>
                                    <Label color="purple" key={1}>Descriptive:  </Label>
                                    <Rating icon='star' name = "rating2" defaultRating={1} maxRating={6} onRate={(e, {rating})=>setR2(rating)}/><br/>
                                    <Label color="yellow" key={1}>Picture:  </Label>
                                    <Rating icon='star' name = "rating3" defaultRating={1} maxRating={6} onRate={(e, {rating})=>setR3(rating)}/><br/>
                                    <Label color="green" key={1}>Language:  </Label>
                                    <Rating icon='star' name = "rating4" defaultRating={1} maxRating={6} onRate={(e, {rating})=>setR4(rating)}/><br/>
                                    <Label color="teal" key={1}>Appeal:  </Label>
                                    <Rating icon='star' name = "rating5" defaultRating={1} maxRating={6} onRate={(e, {rating})=>setR5(rating)}/><br/>
                                    <br></br>  
                                    <TextArea name= "text" placeholder='Tell us more' onChange={(e, {value})=>setText(value)}/>
                                <input type="hidden" name="id" value={e.id}/>
                            </Card.Content>
                        <Form.Button>Submit</Form.Button> 
                        <br></br>     
                   </Card></div></Form></Grid.Column>
        )})
    }
  </Card.Group></Grid></div>
    <br></br>
    <br></br>
    <br></br>
    <div className="Select">
        <Card>
        <Card.Content>
        <Card.Header centered>Reviewer Profile</Card.Header>    </Card.Content>
        <Image centered src={user.props.picture} size='small' rounded/>
        <Card.Content>
            <Card.Header>{user.props.name}</Card.Header>
            <Card.Description>
            {user.props.description}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Card.Header>Rating: {rRating}</Card.Header>
            <Card.Description>
                out of {length} review(s)
            </Card.Description>
        </Card.Content>
        </Card>
  </div>
  </>
    )}

export default Review;