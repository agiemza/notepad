import { useState } from "react"
import Toolbar from "./components/toolbar"

export default function App() {
    const [notes, setNotes] = useState([])

    return (
        <section className="app">
            <div className="allnotes-container">
                {notes}
            </div>
            <div className="notepad-container">
                <Toolbar />
                <div className="textArea editable" contentEditable suppressContentEditableWarning>
                    Sample text, <span className="editable" style={{ fontWeight: 700 }}>delete later.</span>
                </div>
            </div>
        </section>


    )
}