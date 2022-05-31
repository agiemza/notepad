import { nanoid } from "nanoid"
import { useState, useEffect } from "react"
import Toolbar from "./components/toolbar"

export default function App() {
    const [notes, setNotes] = useState([])
    const [currentNoteID, setCurrentNoteID] = useState()

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    function handleInput(e) {
        setNotes(prevState => {
            const newState = []
            prevState.map(note => {
                if (note.id === currentNoteID) {
                    note.content = e.target.innerHTML.replace(/&nbsp;/g, ' ').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                    note.timeEdited.time = getTimeAndDate().time
                    note.timeEdited.date = getTimeAndDate().date
                    newState.push(note)
                }
                else {
                    newState.push(note)
                }
            })
            return newState
        })
    }

    function getTimeAndDate() {
        const dateObject = new Date()
        const hours = dateObject.getHours() < 10 ? `0${dateObject.getHours()}` : dateObject.getHours()
        const minutes = dateObject.getMinutes() < 10 ? `0${dateObject.getMinutes()}` : dateObject.getMinutes()
        const seconds = dateObject.getSeconds() < 10 ? `0${dateObject.getSeconds()}` : dateObject.getSeconds()

        const day = dateObject.getDate() < 10 ? `0${dateObject.getDate()}` : dateObject.getDate()
        let month
        switch (dateObject.getMonth()) {
            case 0:
                month = "January"
                break
            case 1:
                month = "February"
                break
            case 2:
                month = "March"
                break
            case 3:
                month = "April"
                break
            case 4:
                month = "May"
                break
            case 5:
                month = "June"
                break
            case 6:
                month = "July"
                break
            case 7:
                month = "August"
                break
            case 8:
                month = "Septemper"
                break
            case 9:
                month = "October"
                break
            case 10:
                month = "November"
                break
            case 11:
                month = "December"
                break
            default:
                console.log("Error occured while loading month.")
                break
        }

        const date = `${day} ${month} ${dateObject.getFullYear()}`
        const time = `${hours}:${minutes}:${seconds}`

        return { time, date }
    }

    function createNewNote() {
        const newNoteID = nanoid()
        const newNote = {
            id: newNoteID,
            title: "New Note",
            content: "",
            timeCreated: {
                date: getTimeAndDate().date,
                time: getTimeAndDate().time
            },
            timeEdited: {
                date: getTimeAndDate().date,
                time: getTimeAndDate().time
            }
        }
        console.log(newNote)
        setNotes(prevState => [...prevState, newNote])
        setCurrentNoteID(newNoteID)
    }

    function handleTest() {
        console.log(notes)
        console.log("current note id: " + currentNoteID)
    }

    return (
        <section className="app">
            <button onClick={handleTest}>Test something</button>
            <div className="allnotes-container">
                {/* {notes} */}
            </div>
            <div className="notepad-container">
                <Toolbar
                    createNewNote={createNewNote}
                />
                <div className="textArea" id="textArea" onInput={(e) => handleInput(e)} contentEditable suppressContentEditableWarning>
                </div>
            </div>
        </section>


    )
}
