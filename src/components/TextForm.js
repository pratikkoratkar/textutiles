import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("  Converted To Uppercase ! " , "Success")
    }
    const handleLowClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("  Converted To Lowercase ! " , "Success")

    }
    const handleClearClick = ()=>{
        let newText=("");
        setText(newText)
        props.showAlert("  Text cleared ! " , "Success")

    }
    const handleCopy = ()=>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("  Text copied ! " , "Success")

    }
    const handleExtraSpaces = ()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("  Removed extra spaces ! " , "Success")

    }

    const handleOnChange = (event)=>{
        // console.log("OnChange")
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // setText("new text");
    return (
        <>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#47617b',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Upparcase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert To Lowecase</button>
            <button className="btn btn-primary mx-1 my-2 " onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4" style={{color:props.mode==='light'?'black':'white'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length-1} Word AND {text.length} Character</p>
            <p>It takes {0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>

        </div>
        </>
    )
}
