import React, { useState } from 'react'



export default function TextForm(props) {
    const handleup = () => {
        console.log("My boi : " + Text);
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const onchangehandler = (event) => {
        console.log("baby");
        setText(event.target.value)
    }

    const [Text, setText] = useState('');
    // setText("new Text");
    return (
        <>
            <div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label" style={{color: props.mode === 'light'? 'black': 'white'}}>{props.heading}</label>
                    <textarea class="form-control" value={Text} onChange={onchangehandler} id="exampleFormControlTextarea1" rows="7" style={{backgroundColor: props.mode === 'light' ? 'white' : 'black',color: props.mode === 'light'? 'black' : 'white'}}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleup}>Click</button>
            </div>
            <div className="container mt-3" style={{color: props.mode === 'light'? 'black': 'white'}}>
                <h1>Count the word and characters</h1>
                <p>{Text.length} characters and {Text.split(" ").length} words</p>
            </div>
            <div className="container mt-3" style={{color: props.mode === 'light'? 'black': 'white'}}>
                <h1>Time to read it</h1>
                <p>{0.008 * Text.split(" ").length} minutes read</p>
                <p>{Text.length>0?Text:"Enter something in the box above to preview it"}</p>
            </div>
        </>

    )
}
