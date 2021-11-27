import React, {useState} from 'react'
import Box from '@material-ui/core/Box';
import '../App.css'

export default function TextForm(props) {
    // Upper case
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();   
        setText(newText)
    }
    // Lower Case 
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();   
        setText(newText)
    }
    
    // Clear text
    const handleClearClick = ()=>{
        console.log("Clear btn was clicked" + text);
        let newText = ('');   
        setText(newText)
    }
    const handleOnChange = (event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Type Here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
            </div>
            <button className="btn btn-primary " onClick={handleUpClick}> Convert - Uppercase</button>
            <button className="btn btn-primary " onClick={handleLoClick}> Convert - Lowercase</button>
            <button className="btn btn-primary " onClick={handleClearClick}> Clear</button>

            <div className="container text-center my-3">
                <h1>Your Text summary</h1>
                <Box color="white" bgcolor="darkmagenta "><p>{text.split(" ").length} words and {text.length} characters </p>
                <p>Min. to Read = {0.008 * text.split(" ").length}</p></Box>
                <h2>Preview</h2>
                <Box color="white" bgcolor="darkmagenta "><p>{text}</p></Box>
            </div>
        </div>
    )
}
