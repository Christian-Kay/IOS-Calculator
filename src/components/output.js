

function OutputField({ value }) {
    return <div>
        <input style={{ width: 250, height: 30, padding: 5, fontSize: 20 }} type='text' value={value} />
    </div>
}

export default OutputField