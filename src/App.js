import { nanoid } from "nanoid"
import { useState, useEffect } from "react"
import Toolbar from "./components/Toolbar"
import Noteslist from "./components/Noteslist"

export default function App() {
    const [notes, setNotes] = useState(() => {
        if (localStorage.getItem("notes")) {
            return JSON.parse(localStorage.getItem("notes"))
        }
        else {
            return []
        }
    })
    const [currentNoteID, setCurrentNoteID] = useState(notes.length > 0 && notes[0].id)

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    useEffect(() => {
        if (notes.length !== 0) {
            if (notes.length > 1) {
                const previousActive = document.querySelector(".activeNote")
                previousActive && previousActive.classList.remove("activeNote")
            }
            currentNoteID && document.getElementById(currentNoteID).classList.add("activeNote")
            const currentNote = notes.find(note => note.id === currentNoteID)
            updateTextField(currentNote.title, "titleArea")
            updateTextField(currentNote.content, "textArea")
        }
    }, [currentNoteID])

    function editTitle(e) {
        setNotes(prevState => {
            const newState = []
            prevState.forEach(note => {
                if (note.id === currentNoteID) {
                    note.title = e.target.innerHTML
                    note.isNew && delete note.isNew
                    newState.unshift(note)
                }
                else {
                    newState.push(note)
                }
            })
            return newState
        })
    }

    function editNote(e) {
        setNotes(prevState => {
            const newState = []
            prevState.forEach(note => {
                if (note.id === currentNoteID) {
                    console.clear()
                    console.log(note)

                    const input = e.target.innerHTML

                    if (note.isNew && input.indexOf("<div>") !== -1) {
                        note.title = input.slice(0, input.indexOf("<div>"))
                        updateTextField(note.title, "titleArea")
                        delete note.isNew
                    }

                    note.content = input
                    note.timeEdited.time = getTimeAndDate().time
                    note.timeEdited.date = getTimeAndDate().date

                    newState.unshift(note)
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
            },
            isNew: true
        }
        setNotes(prevState => [newNote, ...prevState])
        setCurrentNoteID(newNoteID)
        updateTextField(newNote.title, "titleArea")
        updateTextField(newNote.content, "textArea")
    }

    function changeNote(note) {
        setCurrentNoteID(note.id)
        updateTextField(note.title, "titleArea")
        updateTextField(note.content, "textArea")
    }

    function deleteNote(note) {
        setNotes(prevState => {
            const newState = []
            prevState.map(item => item.id !== note.id && newState.push(item))
            if (newState.length > 0) {
                if (note.id === currentNoteID) {
                    setCurrentNoteID(newState[0].id)
                    updateTextField(newState[0].title, "titleArea")
                    updateTextField(newState[0].content, "textArea")
                }
            } else {
                setCurrentNoteID(false)
                updateTextField("", "titleArea")
                updateTextField("", "textArea")
            }
            return newState
        })
    }

    function updateTextField(content, field) {
        content ? document.getElementById(field).innerHTML = content : document.getElementById(field).innerHTML = ""
    }

    function handleTest() {
        console.log(currentNoteID)
        console.log(notes)
    }

    return (
        <section className="app">
            <button onClick={handleTest}>Test something</button>
            <div className="side-menu">
                <Noteslist
                    createNewNote={createNewNote}
                    changeNote={changeNote}
                    notes={notes}
                    deleteNote={deleteNote}
                />
            </div>
            <div className="notepad-container">
                <Toolbar />
                <div
                    className="titleArea"
                    id="titleArea"
                    onInput={e => editTitle(e)}
                    onKeyPress={e => e.key === "Enter" && e.preventDefault()}
                    contentEditable suppressContentEditableWarning>
                </div>
                <div
                    className="textArea"
                    id="textArea"
                    onInput={e => editNote(e)}
                    contentEditable
                    suppressContentEditableWarning>
                </div>
            </div>
        </section>
    )
}