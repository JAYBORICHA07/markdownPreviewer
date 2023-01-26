import React from "react";
import {marked} from "marked";
import './App.css'

marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer();


// inline code, 






function App() {
  const [text,setText] = React.useState(`
# h1
## h2
**bold text**
> blockquote
[title](https://www.example.com)
![alt text](image.jpg)
- First item

Start an indented code block following a paragraph with a blank line and at least four spaces of indentation:

    This is a code block.

    Blank lines between indented lines do not end the code block.

    Here is some HTML:
        <div class="footer">
            © 2009—2017 JetBrains · All rights reserved
        </div>
This line of text is not indented. It ends the code block and starts a new paragraph.

  `);

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
        onChange={event => setText(event.target.value)} >
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