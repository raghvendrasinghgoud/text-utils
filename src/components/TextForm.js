import React from 'react'
import react,{useState} from 'react';
export default function TextForm(prop) {


  function handleOnChange(event){
    setText(event.target.value);
    console.log("handle on change");
  }

  function handleUpClick(){
    setText(text.toUpperCase());
    prop.showAlert("Success","Text changed to uppercase");
  }

  function copyOnClick(){
    navigator.clipboard.writeText(text);
    prop.showAlert("Success","Text copied to clipboard");
  }

  function handleLoClick(){
    setText(text.toLowerCase());
    prop.showAlert("Success","Text changed to lowercase");
  }

  function clearOnClick(){
    setText("");
    prop.showAlert("Success","Text cleared");
  }
  
  function btnColor(){
    if(prop.mode==='dark') return 'dark';
    else return 'primary';
  }

  const [text, setText] = useState("Enter text Here");
  

  return (
    <div className="container mt-5" style={prop.color}>
       <div className="form-floating">
        <h1>{prop.title}</h1>
  <textarea className={`form-control mb-5 ${(prop.mode==='light')?'bg-light text-dark':'bg-secondary text-white'}`} value={text} onChange={handleOnChange} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  
</div>
<div className="d-flex justify-content-end">
    <button className={`btn-${btnColor()} ml-3`} onClick={handleLoClick}>Lower Case</button>
    <button className={`btn-${btnColor()} ml-3`} onClick={handleUpClick}>Upper Case</button>
    <button className={`btn-${btnColor()} ml-3`} onClick={copyOnClick}>Copy Text</button>
    <button className={`btn-${btnColor()} ml-3`} onClick={clearOnClick}>Clear Text</button>
    </div>
    <h2>Text Info</h2>
    <p>{text.slice('').length} words and {text.length} character</p>
    <p>{0.008*text.length} minutes take to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
  )
}
