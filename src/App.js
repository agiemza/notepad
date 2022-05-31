import { useEffect, useState } from "react"
import Toolbar from "./components/toolbar"

export default function App() {
    const [notes, setNotes] = useState("")
    
    function handleInput(e) {
        setNotes(e.target.innerHTML.replace(/&nbsp;/g, ' ').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">"))
    }

    function handleTest() {

    }
    return (
        <section className="app">
            <button onClick={handleTest}>Test something</button>
            <div className="allnotes-container">

            </div>
            <div className="notepad-container">
                <Toolbar />
                <div className="textArea" id="textArea" onInput={(e) => handleInput(e)} contentEditable suppressContentEditableWarning>
                </div>
            </div>
        </section>


    )
}