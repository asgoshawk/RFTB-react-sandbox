import { useRef } from "react"

const UseRefExample1 = () => {
    const inputRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log(inputRef.current.value);
        inputRef.current.value = "You just submited!";
        setTimeout(() => { inputRef.current.value = "" }, 1000)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={inputRef} className="form-control mb-2" />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default UseRefExample1