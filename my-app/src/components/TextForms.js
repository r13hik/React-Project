import React, {useState} from 'react'


export default function TextForms(props) {

    const handleUpClick = () => {
        // console.log("UpperCase was clicked: " + text); 
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }

    const handleLowClick = () => {
        // console.log("UpperCase was clicked: " + text); 
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Cleared", "success");
    }
    const [text, setText] = useState('');

    const remExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }
    
    return (
        <>
        <div className="container m-2" style={{color : props.mode==='dark' ? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark' ? 'gray':'white', color: props.mode==='dark' ? 'white':'black' }} id="myBox" rows="10" ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary my-2" onClick={handleLowClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary" onClick={remExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container m-4" style={{color : props.mode==='dark' ? 'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>
    
    
  )
}
