export default function Noteslist({ createNewNote, changeNote, notes, deleteNote}) {

    function displayNoteList() {
        return notes.map(note => {
            return (
                <div
                    key={note.id}
                    id={note.id}
                    className="note-card"
                    onClick={() => {
                        changeNote(note)
                    }}>
                    <div
                        className="note-card-title"
                        dangerouslySetInnerHTML={{ __html: note.title }}
                    >
                    </div>
                    <div className="note-card-bottom">
                        <div className="note-card-date">
                            {note.timeEdited.date}
                        </div>
                        <div className="note-card-description" dangerouslySetInnerHTML={{ __html: note.content.slice(0, 50) }}>
                        </div>
                    </div>
                    <button className="delete-button" onClick={(e) => {
                        e.stopPropagation()
                        deleteNote(note)
                    }}>D</button>
                </div>
            )
        })
    }

    return (
        <div className="allnotes-container">
            <div className="allnotes-menu">
                <button onClick={createNewNote}>New note</button>
            </div>
            {displayNoteList()}
        </div>
    )
}