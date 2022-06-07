export default function Toolbar() {

    function handleClick(property) {
        document.execCommand(property)
    }
    function download(){
        const element = document.createElement("a")
        const file = new Blob([document.getElementById("textArea").innerText], {type: 'text/plain'})
        element.href = URL.createObjectURL(file)
        element.download = `${document.getElementById("titleArea").innerText}.txt`
        element.click()
    }

    return (
        <div className="toolbar" id="toolbar">
            <button
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
                className="numbered-button"
                onClick={() => handleClick("insertOrderedList")}
            >
            </button>
            <button
                className="bullet-button"
                onClick={() => handleClick("insertUnorderedList")}
            >
            </button>
            <button
                className="download-button"
                onClick={() => download()}
            >
            </button>
        </div>
    )
}