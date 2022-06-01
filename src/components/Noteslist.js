export default function Noteslist({ notes }) {

    function displayNoteList() {
        return notes.map(note => {
            return (
                <div className="note-card" key={note.id}>
                    <div className="note-card-title">
                        {note.title}
                    </div>
                    <div className="note-card-bottom">
                        <div className="note-card-date">
                            {note.timeEdited.date}
                        </div>
                        <div className="note-card-description">
                            {note.content}
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="allnotes-container">
            {displayNoteList()}
        </div>
    )
}