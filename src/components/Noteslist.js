export default function Noteslist({ changeNote, notes, deleteNote }) {

    function displayNoteList() {
        if (notes.length > 0) {
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
                        }}></button>
                    </div>
                )
            })
        } else {
            return <div className="empty-list-message">You don't have any notes...</div>
        }
    }

    return (
        <div className="allnotes-container">
            {displayNoteList()}
        </div>
    )
}