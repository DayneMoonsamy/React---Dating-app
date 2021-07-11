import React, {useState} from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { TextArea, Icon, Button, Form, Dropdown, Label } from 'semantic-ui-react'
import $ from "jquery";



function RReg() {
    const [data, setData] = useState(" ");
    const [name, setName] = useState(" ");
    const [user, setUser] = useState("User")
    const [text, setText] = useState("")
    const [arr, setArr] = useState(true)
    const [picture, setPictureLoad] = useState(false)


    function handleRegistration(event) 
      {

        if(picture == false)
        {
          alert("Image hasn't loaded. Wait 5 seconds and try again.")
        }
        let form = {
            name: name,
            picture: data,
            description: text
          };
        form = JSON.stringify(form);
        fetch('/registerReviewer', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: form
            }).then(res => res.json())
            .then(res => window.location.reload());  
      }

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

    return (
        <>
        <div className="Select">
        <Form  onSubmit={handleRegistration}><br/><br/>
            <Form.Group >
                <Form.Input label='Name: ' placeholder='Username' width={16} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <strong>Profile Picture:  </strong>
            <input type="file" id="input_img"  onChange={handleImage} />
            <br/><br/>
            <strong>Description:  </strong>
            <TextArea placeholder='Tell us more to increase your chance of getting picked' onChange={(e) => setText(e.target.value)}/>
            <br/><br/>
            <Form.Button>Submit</Form.Button>
        </Form> 
        </div>
    </>
    );
}

export default RReg;