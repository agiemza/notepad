
export default function Toolbar() {

    function handleClick(property) {
        console.log(typeof property+ " "+ property)
        document.execCommand(property)

    }
    return (
        <div className="toolbar">
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
    )
}