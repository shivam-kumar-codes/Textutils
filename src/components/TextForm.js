import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!" , "success")
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowercase!" , "success")
    }
    const handleClearClick = ()=>{
        let newText ='';
        setText(newText)
        props.showAlert("Text cleared!" , "success")
    }

    const handleOnChange = (event)=>{
        // console.log("on change")
        setText(event.target.value)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const[text, setText] = useState('')
  return (
    <>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
     <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
         <h2>Your text summary</h2>
         <p> {text.split(" ").length} words and {text.length} characters</p>
         <p>{0.008 * text.split(" ").length} minutes read</p>
         <h2>preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}  
