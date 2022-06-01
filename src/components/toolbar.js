
export default function Toolbar(props) {

    function handleClick(property) {
        document.execCommand(property)
    }

    return (
        <div className="toolbar">
            <div className="stylingBar">
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
            </div>
        </div>
    )
}