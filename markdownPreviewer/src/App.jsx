import React from "react";
import {marked} from "marked";
import './App.css'

marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer();



function App() {
  const [text,setText] = React.useState("");

  return (
    <div className="" id="b1">
      <div id="b1">
      <h2 className=''>INPUT</h2>
      <textarea 
        name='text' 
        id='editor' 
        cols={60}
        rows={10} 
        value={text} 
        className="textarea"
        onChange={e => setText(e.target.value)} >
      </textarea>
      </div>
      <div id="b2">
      <h2 className="" id="b2">OUTPUT</h2>
      <Preview markdown={text} />
      </div>
    </div>
  );
}

function Preview({markdown}){
  return (
    <div className="box" id="preview" dangerouslySetInnerHTML={{
      __html: marked(markdown , {renderer: renderer})
    }}>
    </div>
  )
}

export default App;