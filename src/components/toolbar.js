export default function Toolbar() {

    function handleClick(property) {
        document.execCommand(property)
    }
    function heading(property) {
        document.execCommand('insertOrderedList')
    }
    return (
        <div className="toolbar" id="toolbar">
            <button
                className="styleButton"
                onClick={() => handleClick("bold")}
                style={{ fontWeight: '700' }}
            >
                B
            </button>
            <button
                onClick={() => handleClick("italic")}
                style={{ fontStyle: 'italic' }}
            >
                I
            </button>
            <button
                onClick={() => handleClick("underline")}
                style={{ textDecoration: 'underline' }}
            >
                U
            </button>
            <button
                onClick={() => handleClick("strikeThrough")}
                style={{ textDecoration: 'line-through' }}
            >
                S
            </button>
            <button
                onClick={() => handleClick("insertOrderedList")}
            >
                1. Numered List
            </button>
            <button
                onClick={() => handleClick("insertUnorderedList")}
            >
                Bulleted list
            </button>
        </div>
    )
}