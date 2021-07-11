import React, {useState} from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Button, Form, Dropdown } from 'semantic-ui-react'
import $ from "jquery";


function UReg() {
    const [data, setData] = useState(" ");
    const [name, setName] = useState(" ");
    const [loc, setLoc] = useState(" ")
    const [matchLike, setMatchLike] = useState(" ")
    const [like, setLike] = useState(" ")
    const [gend, setGender] = useState(" ")
    const [genderMatch, setGenderMatch] = useState(" ")
    const [picture, setPictureLoad] = useState(false)

    const gender= [
        {text: 'Male',value: 'M'},
        {text: 'Female',value: 'F'},
        {text: 'Non-conforming', value: 'NB'},
      ]

    function handleImage(event)
    {
        var file = document.getElementById('input_img');
        var form = new FormData();
        console.log("KLOKK")
        form.append("image", file.files[0])

        var settings = {
            url:
              "https://api.imgbb.com/1/upload?key=cb881fbdc9ff90772732742e577c2706",
            method: "POST",
            timeout: 0,
            processData: false,
            mimeType: "multipart/form-data",
            contentType: false,
            data: form,
          };
          $.ajax(settings).done(function (response) {
            var jx = JSON.parse(response);
            console.log(jx)
            setData(jx.data.url)
            console.log(data)
            setPictureLoad(true)
          });
        event.preventDefault();
    }

      function handleRegistration(event) 
      {
        if(picture == false)
        {
          alert("Image hasn't loaded. Wait 5 seconds and try again.")
        }
        let form = {
            name: name,
            loc: loc,
            matchLike: matchLike,
            like: like,
            gend: gend,
            genderMatch: genderMatch,
            data:data,
            type: "s"
          };
        form = JSON.stringify(form);
        fetch('/registerUser', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: form
            }).then(res => res.json())
            .then(res =>  window.location.reload());  
      }

    return (
        <>
        <div className="Select">
        <Form onSubmit={handleRegistration}>
            <Form.Group>
                <Form.Input label='Username' placeholder='Username' width={8} onChange={(e) => setName(e.target.value)}/>
                <Form.Input label='Location' placeholder='Location' width={8} onChange={(e) => setLoc(e.target.value)}/>
            </Form.Group>
            <br></br>
            <strong>Profile Picture:  </strong>
            <input type="file" id="input_img" style={{ display: "hidden" }} onChange={handleImage} />
            <br></br>
            <br></br>
            <Form.Group>
                <Form.Input width="8" label='I like:' onChange={(e) => setLike(e.target.value)} placeholder='Tell us some of the things you like' />
                <Form.Input width="8" label='Looking for:' onChange={(e) => setMatchLike(e.target.value)} placeholder='What are you looking for in a partner' />
            </Form.Group>
            <Form.Group>
                <Form.Dropdown label='Gender' placeholder='Gender' onChange={(e) => setGender(e.target.innerText)} width={12} selection options={gender} />     
               
                <Form.Dropdown label='Gender looking for' placeholder='Gender' onChange={(e) => setGenderMatch(e.target.innerText)} width={8} selection options={gender}/>
            </Form.Group>
            <br></br>
            <br></br>
            <br></br>

            <Form.Button>Submit</Form.Button>
        </Form> 
        </div>
       </>
   );
}

export default UReg;